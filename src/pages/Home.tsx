import React from "react";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function Home() {
  return (
    <div>
      <section className="text-center py-12">
        <h1 className="text-3xl font-bold mb-2">Learn new skills online</h1>
        <p className="text-gray-600">Bite-sized courses to help you grow.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Featured courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </section>
    </div>
  );
}
