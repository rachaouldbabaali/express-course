// filepath: src/pages/CourseDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import { expressCourse } from "../data/expressCourse";
import { gitCourse } from "../data/gitCourse";
import Sidebar from "../components/Sidebar";
import CodeBlock from "../components/CodeBlock";
import {
  CourseContent,
  Module,
  Lesson,
  Exercise,
  QuizQuestion,
} from "../types/course";

export default function CourseDetail() {
  const { slug } = useParams<{ slug?: string }>();
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const course = courses.find((c) => c.slug === slug);

  // Get course content based on slug
  let courseContent: CourseContent | null = null;
  if (slug === "git-and-github") courseContent = gitCourse as CourseContent;
  if (slug === "node-and-express")
    courseContent = expressCourse as CourseContent;

  useEffect(() => {
    // Load completed items from localStorage
    const saved = localStorage.getItem(`progress-${slug}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCompletedItems(new Set(parsed));
        } else if (parsed && typeof parsed === "object") {
          // support legacy/object format (e.g., { itemId: true } or progress map)
          const keys = Object.keys(parsed).filter((k) => {
            const v = (parsed as any)[k];
            // treat truthy or numeric >=100 as completed
            return v === true || (typeof v === "number" && v >= 100);
          });
          setCompletedItems(new Set(keys));
        } else {
          // fallback for single value
          setCompletedItems(new Set([String(parsed)]));
        }
      } catch (e) {
        // If parse fails, ignore and leave empty set
        console.warn("Failed to parse saved progress:", e);
      }
    }
  }, [slug]);

  const toggleCompleted = (itemId: string) => {
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(itemId)) {
      newCompleted.delete(itemId);
    } else {
      newCompleted.add(itemId);
    }
    setCompletedItems(newCompleted);
    try {
      localStorage.setItem(
        `progress-${slug}`,
        JSON.stringify([...newCompleted])
      );
    } catch (e) {
      // ignore storage errors
    }
  };

  const toggleSolution = (exerciseId: string) => {
    setShowSolution((prev: Record<string, boolean>) => ({
      ...prev,
      [exerciseId]: !prev[exerciseId],
    }));
  };

  const handleQuizAnswer = (
    quizId: string,
    questionIndex: number,
    answerIndex: number
  ) => {
    setQuizAnswers((prev: Record<string, number>) => ({
      ...prev,
      [`${quizId}-${questionIndex}`]: answerIndex,
    }));
  };

  const getQuizResult = (
    quiz: QuizQuestion[] | undefined,
    quizId: string
  ): { correct: number; total: number } => {
    let correct = 0;
    if (!quiz) return { correct: 0, total: 0 };
    quiz.forEach((question: QuizQuestion, index: number) => {
      if (quizAnswers[`${quizId}-${index}`] === question.correct) {
        correct++;
      }
    });
    return { correct, total: quiz.length };
  };

  if (!course)
    return <div className="container mx-auto px-4 py-8">Course not found</div>;
  if (!courseContent)
    return (
      <div className="container mx-auto px-4 py-8">
        Course content not available
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-screen">
      <Sidebar />

      <main className="md:col-span-3 space-y-8 py-6">
        {/* Course Header */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full">
                  {course.level}
                </span>
                <span className="bg-green-100 text-green-600 text-sm font-semibold px-3 py-1 rounded-full">
                  ⏱️ {course.duration}
                </span>
                <span className="bg-purple-100 text-purple-600 text-sm font-semibold px-3 py-1 rounded-full">
                  📊 {completedItems.size} items completed
                </span>
              </div>

              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                {course.description}
              </p>

              {courseContent.prerequisites && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                    <span>📋</span>
                    Prerequisites
                  </h3>
                  <ul className="text-yellow-700 list-disc list-inside space-y-1">
                    {courseContent.prerequisites.map((prereq, index) => (
                      <li key={index}>{prereq}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Course Modules */}
        <div className="space-y-8">
          {courseContent.sections.map((module, moduleIndex) => (
            <section
              id={module.id}
              key={module.id}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 scroll-mt-8"
            >
              {/* Module Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {moduleIndex + 1}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        {module.title}
                      </h2>
                      <div className="flex items-center gap-4 mt-2 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <span>⏱️</span>
                          {module.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <span>🎯</span>
                          {module.lessons?.length || 0} lessons
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Module Objectives */}
                  {module.objectives && (
                    <div className="bg-primary-50 rounded-lg p-4 border border-primary-200">
                      <h3 className="font-semibold text-primary-900 mb-3 flex items-center gap-2">
                        <span>🎯</span>
                        Learning Objectives
                      </h3>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {module.objectives.map((objective, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-primary-700"
                          >
                            <span className="text-primary-500 mt-1">✓</span>
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Lessons */}
              <div className="space-y-8">
                {module.lessons?.map((lesson, lessonIndex) => (
                  <div
                    key={lesson.id}
                    className="border-l-4 border-primary-300 pl-6 ml-3"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <button
                        onClick={() => toggleCompleted(lesson.id)}
                        className={`w-7 h-7 rounded-full border-2 flex-shrink-0 mt-1 transition-all ${
                          completedItems.has(lesson.id)
                            ? "bg-green-500 border-green-500 text-white"
                            : "border-slate-300 hover:border-primary-400"
                        }`}
                      >
                        {completedItems.has(lesson.id) && "✓"}
                      </button>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-slate-800">
                            {lesson.title}
                          </h3>
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded-full ${
                              lesson.type === "theory"
                                ? "bg-blue-100 text-blue-700"
                                : lesson.type === "practical"
                                ? "bg-green-100 text-green-700"
                                : "bg-purple-100 text-purple-700"
                            }`}
                          >
                            {lesson.type}
                          </span>
                        </div>

                        {/* Lesson Content */}
                        <div className="space-y-4">
                          {/* Paragraphs */}
                          {lesson.content?.paragraphs?.map((paragraph, idx) => (
                            <p
                              key={idx}
                              className="text-slate-700 leading-relaxed"
                            >
                              {paragraph}
                            </p>
                          ))}

                          {/* Key Points */}
                          {lesson.content?.keyPoints && (
                            <div className="bg-slate-50 rounded-lg p-4">
                              <h4 className="font-medium text-slate-800 mb-2">
                                Key Points:
                              </h4>
                              <ul className="list-disc list-inside space-y-1 text-slate-700">
                                {lesson.content.keyPoints.map((point, idx) => (
                                  <li key={idx}>{point}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Steps */}
                          {lesson.content?.steps && (
                            <div className="space-y-3">
                              {lesson.content.steps.map((step, stepIdx) => (
                                <div
                                  key={stepIdx}
                                  className="bg-slate-50 rounded-lg p-4 border border-slate-200"
                                >
                                  <div className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                                      {stepIdx + 1}
                                    </span>
                                    <div className="flex-1">
                                      <p className="text-slate-700 mb-2">
                                        {step.text}
                                      </p>
                                      {step.code && (
                                        <CodeBlock code={step.code} />
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Code Blocks */}
                          {lesson.content?.code && (
                            <div>
                              {lesson.content.description && (
                                <p className="text-slate-600 mb-3">
                                  {lesson.content.description}
                                </p>
                              )}
                              <CodeBlock code={lesson.content.code} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Exercises */}
              {module.exercises && module.exercises.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                      💪
                    </span>
                    Practice Exercises
                  </h3>

                  <div className="space-y-6">
                    {module.exercises.map((exercise) => (
                      <div
                        key={exercise.id}
                        className="bg-orange-50 border border-orange-200 rounded-xl p-6"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-semibold text-orange-900 mb-2">
                              {exercise.title}
                            </h4>
                            <p className="text-orange-800 mb-3">
                              {exercise.description}
                            </p>
                            <div className="bg-white rounded-lg p-4 border border-orange-300">
                              <h5 className="font-medium text-orange-900 mb-2">
                                Your Task:
                              </h5>
                              <pre className="text-slate-700 whitespace-pre-wrap text-sm">
                                {exercise.task}
                              </pre>
                            </div>
                          </div>

                          <button
                            onClick={() => toggleCompleted(exercise.id)}
                            className={`w-7 h-7 rounded-full border-2 flex-shrink-0 transition-all ${
                              completedItems.has(exercise.id)
                                ? "bg-green-500 border-green-500 text-white"
                                : "border-slate-300 hover:border-primary-400"
                            }`}
                          >
                            {completedItems.has(exercise.id) && "✓"}
                          </button>
                        </div>

                        {exercise.hint && (
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                            <p className="text-yellow-800 text-sm">
                              <strong>💡 Hint:</strong> {exercise.hint}
                            </p>
                          </div>
                        )}

                        <button
                          onClick={() => toggleSolution(exercise.id)}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                        >
                          {showSolution[exercise.id]
                            ? "Hide Solution"
                            : "Show Solution"}
                        </button>

                        {showSolution[exercise.id] && exercise.solution && (
                          <div className="mt-4 bg-white rounded-lg p-4 border border-orange-300">
                            <h5 className="font-medium text-orange-900 mb-3">
                              Solution:
                            </h5>
                            <CodeBlock code={exercise.solution} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quiz */}
              {module.quiz && module.quiz.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                      🧠
                    </span>
                    Knowledge Check
                  </h3>

                  <div className="space-y-6">
                    {module.quiz.map((question, qIndex) => (
                      <div
                        key={qIndex}
                        className="bg-white border border-slate-300 rounded-xl p-6"
                      >
                        <h4 className="text-lg font-medium text-slate-900 mb-4">
                          {qIndex + 1}. {question.question}
                        </h4>

                        <div className="space-y-2">
                          {question.options.map((option, oIndex) => (
                            <label
                              key={oIndex}
                              className="flex items-center gap-3 p-3 rounded-lg border-2 border-slate-200 hover:border-primary-300 cursor-pointer transition-colors"
                            >
                              <input
                                type="radio"
                                name={`quiz-${module.id}-${qIndex}`}
                                value={oIndex}
                                onChange={() =>
                                  handleQuizAnswer(module.id, qIndex, oIndex)
                                }
                                className="text-primary-500 focus:ring-primary-500"
                              />
                              <span className="text-slate-700">{option}</span>
                            </label>
                          ))}
                        </div>

                        {quizAnswers[`${module.id}-${qIndex}`] !==
                          undefined && (
                          <div
                            className={`mt-4 p-3 rounded-lg ${
                              quizAnswers[`${module.id}-${qIndex}`] ===
                              question.correct
                                ? "bg-green-100 text-green-800 border border-green-200"
                                : "bg-red-100 text-red-800 border border-red-200"
                            }`}
                          >
                            {quizAnswers[`${module.id}-${qIndex}`] ===
                            question.correct
                              ? "✅ Correct! Well done."
                              : "❌ Not quite right. Try again!"}
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Quiz Results */}
                    <div className="bg-slate-100 rounded-xl p-6 text-center">
                      <h4 className="font-semibold text-slate-900 mb-2">
                        Quiz Results
                      </h4>
                      <p className="text-slate-700">
                        {getQuizResult(module.quiz, module.id).correct} /{" "}
                        {getQuizResult(module.quiz, module.id).total} correct
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Final Project */}
              {module.finalProject && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                      <span>🚀</span>
                      {module.finalProject.title}
                    </h3>
                    <p className="text-blue-100 text-lg mb-6">
                      {module.finalProject.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <span>📋</span>
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {module.finalProject.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span>•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {module.finalProject.bonus && (
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <span>⭐</span>
                            Bonus Features
                          </h4>
                          <ul className="space-y-2">
                            {module.finalProject.bonus.map((bonus, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span>+</span>
                                <span>{bonus}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Course Completion */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🎉 Course Complete!</h2>
          <p className="text-green-100 text-lg mb-6">
            You've finished all modules. Great job on your learning journey!
          </p>
          <div className="bg-white/20 rounded-lg p-4 inline-block">
            <p className="font-semibold">
              Progress: {completedItems.size} items completed
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
