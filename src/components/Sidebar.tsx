import React, { useState } from "react";
import { NavLink, useParams, useLocation, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import { gitCourse } from "../data/gitCourse";
import expressCourse from "../data/expressCourse";
import { CourseContent, Module } from "../types/course";
import Modal from "./Modal";

export default function Sidebar() {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Mock progress data - in real app, this would come from user data
  const userProgress: Record<string, Record<string, number>> = {
    "git-and-github": {
      "getting-started": 100,
      "basic-commands": 75,
      "branching-workflows": 25,
    },
    "node-and-express": {
      "module-1": 100,
      "module-2": 80,
      "module-3": 40,
      "module-4": 20,
      "module-5": 0,
      "module-6": 0,
      "module-7": 0,
      "module-8": 0,
    },
  };

  // Get course content based on slug
  let courseContent: CourseContent | null = null;
  if (slug === gitCourse.slug) courseContent = gitCourse as CourseContent;
  else if (slug === expressCourse.slug)
    courseContent = expressCourse as CourseContent;

  const getProgressForModule = (moduleId: string) => {
    const current = slug ?? "";
    return userProgress[current]?.[moduleId] || 0;
  };

  const getTotalCourseProgress = (courseSlug: string) => {
    const progress = userProgress[courseSlug];
    if (!progress) return 0;

    const values = Object.values(progress);
    if (values.length === 0) return 0;

    return Math.round(
      values.reduce((sum, val) => sum + val, 0) / values.length
    );
  };

  const getModuleIcon = (moduleIndex: number, progress: number) => {
    if (progress === 100) return "✅";
    if (progress > 0) return "📖";

    const icons = ["🔰", "🚀", "🛠️", "🗺️", "🎨", "💾", "🔒", "☁️"];
    return icons[moduleIndex] || "📚";
  };

  // Modal state (moved up so handlers can call showModal)
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState<React.ReactNode>(null);
  const [modalBody, setModalBody] = React.useState<React.ReactNode>(null);

  const showModal = (title: React.ReactNode, body: React.ReactNode) => {
    setModalTitle(title);
    setModalBody(body);
    setModalOpen(true);
  };

  const handleSaveProgress = () => {
    try {
      if (!slug)
        return showModal(
          "No course selected",
          "No course selected to save progress."
        );
      // Persist mock progress for the selected course
      localStorage.setItem(
        `progress-${slug}`,
        JSON.stringify(userProgress[slug] ?? {})
      );
      showModal("Progress saved", "Progress saved locally.");
    } catch (e) {
      console.error(e);
      showModal("Error", "Failed to save progress.");
    }
  };

  const handleTakeNotes = () => {
    if (!slug)
      return showModal("No course selected", "Select a course to take notes.");
    // For now, show feature-coming-soon modal
    showModal(
      "Notes",
      "Notes feature coming soon! For now, focus on the course content."
    );
  };

  const handleViewProgress = () => {
    if (!slug) return showModal("No course selected", "Select a course first.");
    // Show progress in modal
    const progress = getTotalCourseProgress(slug);
    showModal(
      "Course Progress",
      `Your progress in this course: ${progress}% complete!`
    );
  };

  // Function to handle module navigation - scroll to the module section
  const handleModuleNavigation = (moduleId: string) => {
    // Navigate to the course page first if we're not already there
    if (!slug) return;

    if (!location.pathname.includes(`/courses/${slug}`)) {
      navigate(`/courses/${slug}`);
    }

    // Then scroll to the module section
    setTimeout(() => {
      const element = document.getElementById(moduleId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Add a temporary highlight effect
        element.classList.add("bg-yellow-50", "border-yellow-200");
        setTimeout(() => {
          element.classList.remove("bg-yellow-50", "border-yellow-200");
        }, 2000);
      }
    }, 100);
  };

  // Check if we're currently viewing a specific module
  const isModuleActive = (moduleId: string) => {
    return location.hash === `#${moduleId}`;
  };

  return (
    <aside className="hidden md:block md:col-span-1 md:w-72">
      <nav className="sticky top-16">
        <div className="bg-white rounded-xl p-4 shadow-card h-[calc(100vh-4rem)] overflow-auto sidebar-scroll">
          <Modal
            isOpen={modalOpen}
            title={modalTitle}
            onClose={() => setModalOpen(false)}
          >
            {modalBody}
          </Modal>
          {/* Courses Section */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span>📁</span>
              My Courses
            </h3>
            <ul className="space-y-2">
              {courses.map((course) => {
                const progress = getTotalCourseProgress(course.slug);
                const isActive = slug === course.slug;

                return (
                  <li key={course.id}>
                    <NavLink
                      to={`/courses/${course.slug}`}
                      className={({ isActive }) =>
                        `block text-sm px-3 py-2 rounded-lg border transition-all group ${
                          isActive
                            ? "bg-primary-50 border-primary-200 text-primary-700 font-semibold shadow-sm"
                            : "border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                        }`
                      }
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium truncate">
                          {course.title}
                        </span>
                        {progress > 0 && (
                          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full flex-shrink-0">
                            {progress}%
                          </span>
                        )}
                      </div>

                      {/* Course metadata */}
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                        <span
                          className={`px-1.5 py-0.5 rounded ${
                            course.level === "Beginner"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {course.level}
                        </span>
                        <span>{course.duration}</span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full bg-slate-200 rounded-full h-1.5">
                        <div
                          className="bg-primary-500 h-1.5 rounded-full transition-all progress-bar"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Course Content - Only show if we're in a specific course */}
          {courseContent && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <span>📑</span>
                  Course Content
                </h4>
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  {courseContent.totalModules} modules
                </span>
              </div>

              <ul className="space-y-2">
                {courseContent.sections.map((module: Module, index: number) => {
                  const progress = getProgressForModule(module.id);
                  const isActive = isModuleActive(module.id);

                  return (
                    <li key={module.id}>
                      <button
                        onClick={() => handleModuleNavigation(module.id)}
                        className={`w-full text-left text-sm px-3 py-3 rounded-lg border transition-all group ${
                          isActive
                            ? "bg-primary-50 border-primary-200 text-primary-700 font-semibold shadow-sm"
                            : "border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm flex-shrink-0 ${
                              progress === 100
                                ? "bg-green-100 text-green-600"
                                : progress > 0
                                ? "bg-blue-100 text-blue-600"
                                : "bg-slate-100 text-slate-400"
                            }`}
                          >
                            {getModuleIcon(index, progress)}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-slate-800 group-hover:text-slate-900 truncate">
                              {module.title}
                            </div>

                            {/* Module metadata */}
                            <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                              <span className="flex items-center gap-1">
                                <span>⏱️</span>
                                {module.duration}
                              </span>
                              <span className="flex items-center gap-1">
                                <span>📚</span>
                                {module.lessons.length} lessons
                              </span>
                              {module.exercises && (
                                <span className="flex items-center gap-1">
                                  <span>💪</span>
                                  {module.exercises.length}
                                </span>
                              )}
                            </div>

                            {/* Progress section */}
                            {progress > 0 && (
                              <div className="flex items-center gap-2 mt-2">
                                <div className="flex-1 bg-slate-200 rounded-full h-1.5">
                                  <div
                                    className={`h-1.5 rounded-full transition-all progress-bar ${
                                      progress === 100
                                        ? "bg-green-500"
                                        : "bg-primary-500"
                                    }`}
                                    style={{ width: `${progress}%` }}
                                  ></div>
                                </div>
                                <span
                                  className={`text-xs font-medium ${
                                    progress === 100
                                      ? "text-green-600"
                                      : "text-primary-600"
                                  }`}
                                >
                                  {progress}%
                                </span>
                              </div>
                            )}

                            {/* Start learning prompt for 0% progress */}
                            {progress === 0 && (
                              <div className="flex items-center gap-1 mt-1 text-xs text-slate-400">
                                <span>👉</span>
                                Start learning
                              </div>
                            )}
                          </div>
                        </div>
                      </button>

                      {/* Module objectives preview */}
                      {isActive && module.objectives && (
                        <div className="ml-11 mt-2 p-2 bg-slate-50 rounded-lg border border-slate-200">
                          <h5 className="text-xs font-semibold text-slate-700 mb-1">
                            What you'll learn:
                          </h5>
                          <ul className="text-xs text-slate-600 space-y-0.5">
                            {module.objectives
                              .slice(0, 2)
                              .map((objective, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-1"
                                >
                                  <span className="text-primary-500 mt-0.5">
                                    •
                                  </span>
                                  <span className="truncate">{objective}</span>
                                </li>
                              ))}
                            {module.objectives.length > 2 && (
                              <li className="text-slate-500 text-xs">
                                +{module.objectives.length - 2} more objectives
                              </li>
                            )}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* Course Statistics */}
              <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="text-center">
                    <div className="font-semibold text-slate-700">
                      {courseContent.totalLessons}
                    </div>
                    <div className="text-slate-500">Lessons</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-slate-700">
                      {courseContent.totalExercises}
                    </div>
                    <div className="text-slate-500">Exercises</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-slate-700">
                      {courseContent.totalProjects}
                    </div>
                    <div className="text-slate-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-slate-700">
                      {getTotalCourseProgress(slug!)}
                    </div>
                    <div className="text-slate-500">Complete</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="mt-6 pt-4 border-t border-slate-200">
            <h4 className="text-sm font-bold text-slate-800 mb-3">
              Quick Actions
            </h4>
            <div className="space-y-2">
              <button
                onClick={handleSaveProgress}
                className="w-full text-sm bg-primary-500 hover:bg-primary-600 text-white py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>💾</span>
                Save Progress
              </button>
              <button
                onClick={handleTakeNotes}
                className="w-full text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>📋</span>
                Take Notes
              </button>
              {courseContent && (
                <button
                  onClick={handleViewProgress}
                  className="w-full text-sm bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>📊</span>
                  View Progress
                </button>
              )}
            </div>
          </div>

          {/* Current Progress Summary */}
          {courseContent && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-700">
                  Overall Progress
                </span>
                <span className="text-sm font-bold text-primary-600">
                  {getTotalCourseProgress(slug!)}%
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all progress-bar"
                  style={{ width: `${getTotalCourseProgress(slug!)}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>Started</span>
                <span>{getTotalCourseProgress(slug!)}% Complete</span>
              </div>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}
