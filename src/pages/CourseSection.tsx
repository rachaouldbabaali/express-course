import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import { gitCourse } from "../data/gitCourse";
import { expressCourse } from "../data/expressCourse";
import { reactCourse } from "../data/reactCourse";
import Sidebar from "../components/Sidebar";
import CodeBlock from "../components/CodeBlock";

export default function CourseSection() {
  const { slug, sectionId } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) return <div>Course not found</div>;

  // Load detailed section data for courses that have it (gitCourse, expressCourse)
  const section =
    slug === gitCourse.slug
      ? gitCourse.sections.find((s) => s.id === sectionId)
      : slug === expressCourse.slug
      ? (expressCourse.sections as any[]).find((s: any) => s.id === sectionId)
      : slug === reactCourse.slug
      ? (reactCourse.sections as any[]).find((s: any) => s.id === sectionId)
      : null;

  if (!section)
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Sidebar />
        <main className="md:col-span-3">
          <h2 className="text-2xl font-semibold">Section not found</h2>
        </main>
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Sidebar />
      <main className="md:col-span-3 space-y-6">
        <h1 className="text-3xl font-bold">
          {course.title} — {section.title}
        </h1>
        {section.paragraphs &&
          section.paragraphs.map((p: string, i: number) => (
            <p className="text-gray-700" key={i}>
              {p}
            </p>
          ))}

        {section.subsections &&
          section.subsections.map((sub: any) => (
            <section key={sub.id} id={sub.id} className="pt-4">
              <h2 className="text-2xl font-semibold mb-2">{sub.title}</h2>
              {sub.description && (
                <p className="text-sm text-gray-600 mb-2">{sub.description}</p>
              )}
              {sub.steps && (
                <ul className="list-disc pl-5 text-sm text-gray-800">
                  {sub.steps.map((st: any, idx: number) => (
                    <li key={idx} className="mb-2">
                      {st.os ? (
                        <>
                          <strong>{st.os}:</strong> {st.text}
                        </>
                      ) : (
                        st.text
                      )}
                      {st.code && (
                        <div className="mt-2">
                          <CodeBlock code={st.code} />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              {sub.code && (
                <div className="mt-2">
                  <CodeBlock code={sub.code} />
                </div>
              )}
              {"verify" in sub && sub.verify && (
                <div className="mt-2">
                  <CodeBlock code={(sub as any).verify} />
                </div>
              )}
            </section>
          ))}

        {section.items && (
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            {section.items.map((it: string, idx: number) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: it }} />
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
