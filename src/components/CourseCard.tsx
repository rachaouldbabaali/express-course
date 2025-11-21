import React from "react";
import { Link } from "react-router-dom";
import { Course } from "../types/course";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      to={`/courses/${course.slug}`}
      aria-label={`Open course ${course.title}`}
      className="card border-l-4 border-primary-500 block hover:shadow-lg transform hover:-translate-y-1 transition-all duration-150"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-slate-900">
            {course.title}
          </h3>
          <p className="text-sm text-slate-600 mb-3">{course.description}</p>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="inline-block px-2 py-1 bg-slate-100 rounded">
              {course.level}
            </span>
            <span>{course.duration}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
