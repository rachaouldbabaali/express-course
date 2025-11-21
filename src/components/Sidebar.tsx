import React from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { courses } from "../data/courses";
import { gitCourse } from "../data/gitCourse";

export default function Sidebar() {
  const { slug } = useParams();
  const location = useLocation();

  // Mock progress data - in real app, this would come from user data
  const userProgress: Record<string, Record<string, number>> = {
    "git-and-github": {
      installations: 100,
      checklist: 75,
      "cli-commands": 25,
    },
  };

  let sections = null;
  if (slug === gitCourse.slug) sections = gitCourse.sections;

  const getProgressForSection = (sectionId: string) => {
    // slug may be undefined from useParams; guard it
    const current = slug ?? "";
    return userProgress[current]?.[sectionId] || 0;
  };

  return (
    <aside className="hidden md:block md:col-span-1">
      <nav className="sticky top-16">
        <div className="bg-white rounded-xl p-4 shadow-card h-[calc(100vh-4rem)] overflow-auto">
          {/* Courses Section */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span>📁</span>
              My Courses
            </h3>
            <ul className="space-y-2">
              {courses.map((course) => {
                const progress = userProgress[course.slug] ? 40 : 0; // Mock progress
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
                      <div className="flex justify-between items-center">
                        <span>{course.title}</span>
                        {progress > 0 && (
                          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                            {progress}%
                          </span>
                        )}
                      </div>
                      {/* Progress bar */}
                      <div className="w-full bg-slate-200 rounded-full h-1 mt-2">
                        <div
                          className="bg-primary-500 h-1 rounded-full transition-all"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Course Sections */}
          {sections && (
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span>📑</span>
                Course Content
              </h4>
              <ul className="space-y-2">
                {sections.map((section) => {
                  const progress = getProgressForSection(section.id);
                  return (
                    <li key={section.id}>
                      <NavLink
                        to={`/courses/${slug}#${section.id}`}
                        className={({ isActive }) =>
                          `block text-sm px-3 py-2 rounded-lg border transition-all group ${
                            isActive
                              ? "bg-primary-50 border-primary-200 text-primary-700 font-semibold shadow-sm"
                              : "border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                          }`
                        }
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs mt-0.5 ${
                              progress === 100
                                ? "bg-green-100 text-green-600"
                                : progress > 0
                                ? "bg-blue-100 text-blue-600"
                                : "bg-slate-100 text-slate-400"
                            }`}
                          >
                            {progress === 100
                              ? "✓"
                              : section.id.charAt(0).toUpperCase()}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{section.title}</div>
                            {progress > 0 && (
                              <div className="flex items-center gap-2 mt-1">
                                <div className="flex-1 bg-slate-200 rounded-full h-1.5">
                                  <div
                                    className={`h-1.5 rounded-full transition-all ${
                                      progress === 100
                                        ? "bg-green-500"
                                        : "bg-primary-500"
                                    }`}
                                    style={{ width: `${progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs text-slate-500">
                                  {progress}%
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Quick Actions */}
          <div className="mt-6 pt-4 border-t border-slate-200">
            <h4 className="text-sm font-bold text-slate-800 mb-3">
              Quick Actions
            </h4>
            <button className="w-full text-sm bg-primary-500 hover:bg-primary-600 text-white py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-2">
              <span>💾</span>
              Save Progress
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
}
