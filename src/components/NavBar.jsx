import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-md border-b border-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="" className="font-mono text-xl fint-bold text-white">
            {" "}
            pedro <span className="text-blue-500">.tech</span>{" "}
          </a>
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="" className="tex-gray-300 hove:text transition-colors">
              Home
            </a>
            <a href="#about" className="tex-gray-300 hove:text transition-colors">
              About
            </a>
            <a href="#projects" className="tex-gray-300 hove:text transition-colors">
              Project
            </a>
            <a href="#contact" className="tex-gray-300 hove:text transition-colors">
              Contacts
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
