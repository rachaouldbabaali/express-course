import React from "react";
import { Link } from "react-router-dom";
import { Course } from "../types/course";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      to={`/courses/${course.slug}`}
      aria-label={`Open course ${course.title}`}
      className="card border-l-4 border-primary-500 block hover:shadow-lg transform hover:-translate-y-1 transition-all duration-150 bg-white rounded-xl overflow-hidden"
    >
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2 text-slate-900">
              {course.title}
            </h3>
            <p className="text-sm text-slate-600 mb-3 line-clamp-2">
              {course.description}
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
              <span className={`inline-block px-2 py-1 rounded-full ${
                course.level === "Beginner" 
                  ? "bg-green-100 text-green-800" 
                  : course.level === "Intermediate"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-purple-100 text-purple-800"
              }`}>
                {course.level}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {course.duration}
              </span>
            </div>
            
            {/* Simple prerequisites preview */}
            {course.prerequisites && course.prerequisites.length > 0 && (
              <div className="text-xs text-slate-500">
                <span className="font-medium">Prerequisites:</span> {course.prerequisites.slice(0, 2).join(", ")}
                {course.prerequisites.length > 2 && "..."}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}