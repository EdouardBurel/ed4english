import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { name: "Nos Formations", path: "/options" },
    { name: "À Propos", path: "/about" },
    { name: "English Fun!", path: "/englishfun" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleNav = () => setNavOpen(!navOpen);

  // Lock scroll on mobile
  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "auto";
  }, [navOpen]);

  return (
    <header className="fixed w-full top-0 left-0 bg-[#012169] text-white z-50 shadow-lg">
      <div className="max-w-[1240px] mx-auto flex justify-between items-center px-4 py-4 md:py-5">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl md:text-3xl font-bold text-[#00df9a]">ED4ENGLISH</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-[#00df9a] transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <div className="md:hidden z-50" onClick={toggleNav}>
          {navOpen ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
        </div>
      </div>

      {/* Overlay when menu is open */}
      {navOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleNav}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 h-full bg-[#012169] text-white z-50 transform transition-transform duration-300 ease-in-out ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 pt-8 flex flex-col space-y-6">
          <h2 className="text-2xl font-bold text-[#00df9a]">ED4ENGLISH</h2>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setNavOpen(false)}
              className="text-lg hover:text-[#00df9a] transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
