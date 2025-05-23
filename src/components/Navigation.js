import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="flex justify-center py-4 border-b border-gray-200 dark:border-slate-700 mb-10">
      <div className="flex gap-8">
        <Link
          to="/"
          className={`text-lg hover:text-blue-500 transition-colors ${
            location.pathname === "/" ? "font-bold text-blue-500" : "text-gray-800 dark:text-white"
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`text-lg hover:text-blue-500 transition-colors ${
            location.pathname === "/about" ? "font-bold text-blue-500" : "text-gray-800 dark:text-white"
          }`}
        >
          About Me
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
