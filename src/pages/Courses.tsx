import React from "react";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";
import Sidebar from "../components/Sidebar";

export default function Courses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Sidebar />
      <main className="md:col-span-3">
        <h1 className="text-2xl font-bold mb-4">All Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </main>
    </div>
  );
}
