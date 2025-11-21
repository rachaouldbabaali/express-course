import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import { gitCourse } from "../data/gitCourse";
import Sidebar from "../components/Sidebar";
import CodeBlock from "../components/CodeBlock";

export default function CourseDetail() {
  const { slug } = useParams();
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const course = courses.find((c) => c.slug === slug);

  useEffect(() => {
    // Load completed steps from localStorage
    const saved = localStorage.getItem(`progress-${slug}`);
    if (saved) {
      setCompletedSteps(new Set(JSON.parse(saved)));
    }
  }, [slug]);

  const toggleStep = (stepId: string) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
    localStorage.setItem(`progress-${slug}`, JSON.stringify([...newCompleted]));
  };

  if (!course) return <div>Course not found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Sidebar />
      <main className="md:col-span-3 space-y-6">
        {/* Course Header */}
        <div className="bg-white rounded-xl p-6 shadow-card border border-slate-200">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                {course.title}
              </h1>
              <p className="text-lg text-slate-600 mt-2">
                {course.description}
              </p>
              <div className="flex items-center gap-4 mt-3 text-sm">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  🚀 {course.level}
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                  ⏱️ {course.duration}
                </span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                  📊 {completedSteps.size} steps completed
                </span>
              </div>
            </div>
          </div>
        </div>

        {course.slug === "git-and-github" ? (
          <>
            {gitCourse.sections.map((section) => (
              <section
                id={section.id}
                className="bg-white rounded-xl p-6 shadow-card border border-slate-200 scroll-mt-4"
                key={section.id}
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm">
                    {section.id === "installations"
                      ? "🔧"
                      : section.id === "checklist"
                      ? "✅"
                      : "💻"}
                  </span>
                  {section.title}
                </h2>

                {section.paragraphs?.map((p, i) => (
                  <p className="text-slate-700 leading-relaxed mb-3" key={i}>
                    {p}
                  </p>
                ))}

                {section.subsections && (
                  <div className="space-y-6 mt-6">
                    {section.subsections.map((sub) => (
                      <div
                        key={sub.id}
                        className="border-l-4 border-primary-200 pl-4"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <button
                            onClick={() => toggleStep(sub.id)}
                            className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 transition-all ${
                              completedSteps.has(sub.id)
                                ? "bg-green-500 border-green-500 text-white"
                                : "border-slate-300 hover:border-primary-400"
                            }`}
                          >
                            {completedSteps.has(sub.id) && "✓"}
                          </button>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-slate-800">
                              {sub.title}
                            </h3>
                            {sub.description && (
                              <p className="text-slate-600 mt-1 text-sm">
                                {sub.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Interactive Steps */}
                        {sub.steps && (
                          <div className="space-y-3 ml-9">
                            {sub.steps.map((s, idx) => (
                              <div
                                key={idx}
                                className="bg-slate-50 rounded-lg p-4 border border-slate-200"
                              >
                                <div className="flex items-start gap-3">
                                  <button
                                    onClick={() =>
                                      toggleStep(`${sub.id}-step-${idx}`)
                                    }
                                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 ${
                                      completedSteps.has(
                                        `${sub.id}-step-${idx}`
                                      )
                                        ? "bg-blue-500 border-blue-500 text-white text-xs flex items-center justify-center"
                                        : "border-slate-300 hover:border-blue-400"
                                    }`}
                                  >
                                    {completedSteps.has(
                                      `${sub.id}-step-${idx}`
                                    ) && "✓"}
                                  </button>
                                  <div className="flex-1">
                                    {"os" in s && (s as any).os ? (
                                      <>
                                        <strong className="text-slate-800">
                                          {(s as any).os}:
                                        </strong>{" "}
                                        <span className="text-slate-700">
                                          {(s as any).text}
                                        </span>
                                      </>
                                    ) : (
                                      <span className="text-slate-700">
                                        {(s as any).text}
                                      </span>
                                    )}
                                    {"code" in s && (s as any).code && (
                                      <div className="mt-2">
                                        <CodeBlock code={(s as any).code} />
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {"code" in sub &&
                          !(sub as any).steps &&
                          (sub as any).code && (
                            <div className="ml-9 mt-2">
                              <CodeBlock code={(sub as any).code} />
                            </div>
                          )}

                        {"verify" in sub && sub.verify && (
                          <div className="ml-9 mt-4">
                            <p className="text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                              <span className="text-green-600">✓</span>
                              Verify installation:
                            </p>
                            <CodeBlock code={(sub as any).verify} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.items && (
                  <ul className="space-y-2 mt-4 ml-4">
                    {section.items.map((it, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-slate-700"
                      >
                        <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                        <span dangerouslySetInnerHTML={{ __html: it }} />
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </>
        ) : (
          <section className="bg-white rounded-xl p-6 shadow-card">
            <h2 className="text-2xl font-semibold mb-4">What you'll learn</h2>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                Example learning outcome 1
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                Example learning outcome 2
              </li>
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}
