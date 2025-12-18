// filepath: src/pages/CourseDetail.tsx
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
    // Prefer an explicit items list if saved (newer format)
    const itemsKey = `progressItems-${slug}`;
    const savedItems = localStorage.getItem(itemsKey);
    if (savedItems) {
      try {
        const parsedItems = JSON.parse(savedItems);
        if (Array.isArray(parsedItems)) {
          setCompletedItems(new Set(parsedItems));
          return;
        }
      } catch (e) {
        console.warn("Failed to parse saved progress items:", e);
      }
    }

    // Fallback: load from the legacy progress key
    const saved = localStorage.getItem(`progress-${slug}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // If parsed is an array of item IDs
        if (Array.isArray(parsed)) {
          setCompletedItems(new Set(parsed));
          return;
        }

        // If parsed is an object
        if (parsed && typeof parsed === "object") {
          const completedIds: string[] = [];
          const values = Object.values(parsed);
          const allNumbers = values.every((v) => typeof v === "number");
          
          if (!allNumbers) {
            Object.keys(parsed).forEach((k) => {
              const v = (parsed as any)[k];
              if (v) completedIds.push(k);
            });
            setCompletedItems(new Set(completedIds));
            return;
          }

          // Module->percent map
          if (courseContent) {
            Object.keys(parsed).forEach((moduleId) => {
              const percent = (parsed as any)[moduleId];
              if (typeof percent === "number" && percent >= 100) {
                const module = courseContent!.sections.find(
                  (s) => s.id === moduleId
                );
                if (module) {
                  (module.lessons || []).forEach((l) =>
                    completedIds.push(l.id)
                  );
                  (module.exercises || []).forEach((e) =>
                    completedIds.push(e.id)
                  );
                }
              }
            });
            if (completedIds.length > 0)
              setCompletedItems(new Set(completedIds));
            return;
          }
        }

        setCompletedItems(new Set([String(parsed)]));
      } catch (e) {
        console.warn("Failed to parse saved progress:", e);
      }
    }
  }, [slug, courseContent]);

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
      localStorage.setItem(
        `progressItems-${slug}`,
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

  // Helper function to render theory content
  const renderTheoryContent = (content: any) => {
    if (!content) return null;

    return (
      <div className="space-y-6">
        {/* Paragraphs */}
        {content.paragraphs?.map((paragraph: string, idx: number) => (
          <p key={idx} className="text-slate-700 leading-relaxed">
            {paragraph}
          </p>
        ))}

        {/* Description */}
        {content.description && (
          <p className="text-slate-600 mb-3">{content.description}</p>
        )}

        {/* Key Points */}
        {content.keyPoints && (
          <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Key Points
            </h4>
            <ul className="space-y-2">
              {content.keyPoints.map((point: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-blue-800">
                  <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Concepts */}
        {content.keyConcepts && (
          <div className="bg-amber-50 rounded-lg p-5 border border-amber-200">
            <h4 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Key Concepts
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {content.keyConcepts.map((concept: any, idx: number) => (
                <div key={idx} className="bg-white rounded-lg p-3 border border-amber-100">
                  <h5 className="font-medium text-amber-900 mb-1">{concept.term}</h5>
                  <p className="text-amber-700 text-sm">{concept.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analogy Section */}
        {content.analogy && (
          <div className="bg-purple-50 rounded-lg p-5 border border-purple-200">
            <h4 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              {content.analogy.title ? `Real-World Analogy: ${content.analogy.title}` : "Real-World Analogy"}
            </h4>
            {content.analogy.description && (
              <p className="text-purple-800 mb-4">{content.analogy.description}</p>
            )}
            
            {content.analogy.scenarios && (
              <div className="space-y-3">
                {content.analogy.scenarios.map((scenario: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-lg p-3 border border-purple-100">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <h5 className="font-medium text-purple-900">{scenario.situation}</h5>
                        <p className="text-purple-700 text-sm mt-1">{scenario.explanation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {content.analogy.stages && (
              <div className="space-y-3 mt-4">
                {content.analogy.stages.map((stage: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-lg p-3 border border-purple-100">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <h5 className="font-medium text-purple-900">{stage.stage}</h5>
                        <p className="text-purple-700 text-sm mt-1">{stage.explanation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Checklist */}
        {content.checklist && (
          <div className="bg-emerald-50 rounded-lg p-5 border border-emerald-200">
            <h4 className="font-semibold text-emerald-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Security Checklist
            </h4>
            <div className="space-y-2">
              {content.checklist.map((item: any, idx: number) => (
                <div key={idx} className="bg-white rounded-lg p-3 border border-emerald-100">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <div>
                      <p className="font-medium text-emerald-900">{item.item}</p>
                      <p className="text-emerald-700 text-sm mt-1">{item.why}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Real World Examples */}
        {content.realWorldExamples && (
          <div className="bg-teal-50 rounded-lg p-5 border border-teal-200">
            <h4 className="font-semibold text-teal-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Real World Examples
            </h4>
            <div className="space-y-2">
              {content.realWorldExamples.map((example: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2 text-teal-800">
                  <span className="text-teal-500 mt-1.5 flex-shrink-0">→</span>
                  <span>{example}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* JWT Parts */}
        {content.jwtParts && (
          <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-200">
            <h4 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              JWT Structure Explained
            </h4>
            <div className="grid md:grid-cols-3 gap-3">
              {content.jwtParts.map((part: any, idx: number) => (
                <div key={idx} className="bg-white rounded-lg p-3 border border-indigo-100">
                  <h5 className="font-medium text-indigo-900 mb-1">{part.part}</h5>
                  <p className="text-indigo-700 text-xs mb-2 italic">{part.analogy}</p>
                  <p className="text-indigo-600 text-sm">{part.contains}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comparison */}
        {content.comparison && (
          <div className="bg-cyan-50 rounded-lg p-5 border border-cyan-200">
            <h4 className="font-semibold text-cyan-900 mb-3">Good vs Bad Practices</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-red-200">
                <h5 className="font-medium text-red-700 mb-2">❌ {content.comparison.badPractice}</h5>
                <p className="text-red-600 text-sm">{content.comparison.analogy}</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h5 className="font-medium text-green-700 mb-2">✅ {content.comparison.goodPractice}</h5>
                <p className="text-green-600 text-sm">{content.comparison.analogy}</p>
              </div>
            </div>
          </div>
        )}

        {/* How It Works */}
        {content.howItWorks && (
          <div className="bg-cyan-50 rounded-lg p-5 border border-cyan-200">
            <h4 className="font-semibold text-cyan-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              How It Works
            </h4>
            <ol className="space-y-2">
              {content.howItWorks.map((step: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-cyan-800">
                  <span className="w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Visual Flow */}
        {content.visualFlow && (
          <div className="bg-green-50 rounded-lg p-5 border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              Visual Flow
            </h4>
            <div className="bg-white p-4 rounded border border-green-200">
              <pre className="text-green-800 font-mono text-sm whitespace-pre">
                {content.visualFlow}
              </pre>
            </div>
          </div>
        )}

        {/* Common Mistakes */}
        {content.commonMistakes && (
          <div className="bg-red-50 rounded-lg p-5 border border-red-200">
            <h4 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.928-.833-2.698 0L4.782 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Common Mistakes to Avoid
            </h4>
            <div className="space-y-2">
              {content.commonMistakes.map((mistake: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2 text-red-800">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>{mistake}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hash Example */}
        {content.hashExample && (
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">Hash Example</h4>
            <div className="bg-white p-3 rounded border border-gray-300">
              <pre className="text-gray-800 text-sm overflow-x-auto">
                {content.hashExample}
              </pre>
            </div>
          </div>
        )}

        {/* Steps */}
        {content.steps && (
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 mb-3">Step-by-Step Guide</h4>
            {content.steps.map((step: any, stepIdx: number) => (
              <div key={stepIdx} className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {stepIdx + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-slate-800 mb-2 font-medium">{step.text}</p>
                    {step.explanation && (
                      <p className="text-slate-600 text-sm mb-2">{step.explanation}</p>
                    )}
                    {step.code && <CodeBlock code={step.code} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Code Blocks */}
        {content.code && (
          <div>
            {content.description && (
              <p className="text-slate-600 mb-3">{content.description}</p>
            )}
            <CodeBlock code={content.code} />
          </div>
        )}
      </div>
    );
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
                        {renderTheoryContent(lesson.content)}
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

                        {exercise.starterCode && (
                          <div className="mb-4">
                            <h5 className="font-medium text-orange-900 mb-2">
                              Starter Code:
                            </h5>
                            <CodeBlock code={exercise.starterCode} />
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

              {/* Common Mistakes Section */}
              {module.commonMistakes && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center">
                      ⚠️
                    </span>
                    Common Mistakes & Solutions
                  </h3>
                  <div className="space-y-4">
                    {module.commonMistakes.map((mistake: any, idx: number) => (
                      <div key={idx} className="bg-red-50 rounded-lg p-4 border border-red-200">
                        <div className="flex items-start gap-3">
                          <span className="text-red-500 mt-1">❌</span>
                          <div>
                            <p className="font-medium text-red-900 mb-1">
                              {mistake.mistake}
                            </p>
                            <p className="text-red-700 text-sm">
                              <strong>Solution:</strong> {mistake.solution}
                            </p>
                          </div>
                        </div>
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
                            {question.explanation && (
                              <p className="mt-2 text-sm">
                                {question.explanation}
                              </p>
                            )}
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

              {/* Next Steps */}
              {module.nextSteps && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                      🚀
                    </span>
                    Next Steps
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {module.nextSteps.map((step: string, idx: number) => (
                      <div key={idx} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <p className="text-blue-800">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testing Your API */}
              {module.testingYourAPI && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                      🧪
                    </span>
                    Testing Your API
                  </h3>
                  <div className="space-y-3">
                    {module.testingYourAPI.map((test: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                          {idx + 1}
                        </span>
                        <p className="text-slate-700">{test}</p>
                      </div>
                    ))}
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