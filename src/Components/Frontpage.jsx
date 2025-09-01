import React from "react";
import { Link } from "react-scroll";


function Frontpage() {
  return (
    <header className="bg-white shadow-md w-full scroll-smooth">
      <div className="max-w-6xl mx-auto px-3 py-4 flex items-center justify-between">
        {/* Logo / App Name */}
        <h1 className="text-2xl font-semibold mr-1.5 text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
          ⚡ React Counter
        </h1>

        {/* Navigation / Actions */}
        <nav className="space-x-4 scroll-smooth">
          <Link  to='Total' smooth={true} duration={400}
              className="text-gray-700 scroll-smooth hover:text-indigo-600 font-medium transition-colors duration-300">
             Total
          </Link>
          <Link  to='Score' smooth={true} duration={400}
              className="text-gray-700 scroll-smooth hover:text-indigo-600 font-medium transition-colors duration-300">
              Highscore
          </Link>
          

        </nav>
      </div>
    </header>
  );
}

export default Frontpage;