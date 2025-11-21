import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isCoursePage = location.pathname.includes("/courses");
  
  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center font-bold text-white group-hover:bg-white/30 transition-colors shadow-md">
              🎓
            </span>
            <div>
              <span className="text-xl font-bold tracking-tight block">
                EduPlatform
              </span>
              <span className="text-xs text-white/70 block">
                Learn by doing
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              to="/courses"
              className={`px-3 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                isCoursePage 
                  ? "bg-white/20 shadow-inner" 
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>📚</span>
              Courses
            </Link>
            <Link
              to="/progress"
              className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all flex items-center gap-2"
            >
              <span>📊</span>
              My Progress
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}