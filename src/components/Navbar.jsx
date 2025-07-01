import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Close mobile nav when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (nav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [nav]);

  const location = useLocation();
  const isLightPage = location.pathname === "/options"; // Add others if needed

  return (
    <div className="w-full fixed top-0 bg-[#012169]/90 backdrop-blur-md z-50">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <Link to="/">
          <h1 className="text-3xl font-bold text-[#00df9a]">ED4ENGLISH</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          <li className="p-4 whitespace-nowrap hover:bg-[#00df9a] hover:text-black rounded-md transition duration-300 ease-in-out cursor-pointer">
            <Link to="/options">Nos Formations</Link>
          </li>
          <li className="p-4 whitespace-nowrap hover:bg-[#00df9a] hover:text-black rounded-md transition duration-300 ease-in-out cursor-pointer">
            <Link to="/about">À Propos</Link>
          </li>
            <li className="p-4 whitespace-nowrap hover:bg-[#00df9a] hover:text-black rounded-md transition duration-300 ease-in-out cursor-pointer">
            <Link to="/englishfun">English Fun!</Link>
          </li>
          <li className="p-4 whitespace-nowrap hover:bg-[#00df9a] hover:text-black rounded-md transition duration-300 ease-in-out cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div
          onClick={handleNav}
          className="block md:hidden z-50 cursor-pointer"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* 🟡 Overlay */}
      {nav && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={() => setNav(false)}
        ></div>
      )}

      {/* 🟢 Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 ${
          isLightPage ? "bg-[#1D3B34] text-black" : "bg-[#000300]"
        } bg-opacity-95 p-4 z-50 transform transition-all duration-500 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link to="/">
          <h1 className="text-3xl font-bold text-[#00df9a] m-4 font-heading border-b border-gray-600">
            ED4ENGLISH
          </h1>
        </Link>
        <ul className="uppercase space-y-2">
          <li className="p-4 text-yellow-500 whitespace-nowrap cursor-pointer bg-transparent border-b border-gray-600 rounded-md hover:bg-[#00df9a] hover:text-black transition duration-300 ease-in-out">
            <Link to="/options" onClick={() => setNav(false)}>
              Nos Formations
            </Link>
          </li>
          <li className="p-4  text-yellow-500 whitespace-nowrap cursor-pointer bg-transparent border-b border-gray-600 rounded-md hover:bg-[#00df9a] hover:text-black transition duration-300 ease-in-out">
            <Link to="/about" onClick={() => setNav(false)}>
              À Propos
            </Link>
          </li>
          <li className="p-4  text-white whitespace-nowrap cursor-pointer bg-transparent border-b border-gray-600 rounded-md hover:bg-[#00df9a] hover:text-black transition duration-300 ease-in-out">
            <Link to="/englishfun" onClick={() => setNav(false)}>
              Enlgish Fun !
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
