import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">ED4ENGLISH.</h1>

      <ul className="hidden md:flex">
        <li className="p-4 whitespace-nowrap hover:bg-[#00df9a] hover:text-black rounded-md transition duration-300 ease-in-out cursor-pointer">
          <Link to="/">Accueil</Link>
        </li>
        <li className="p-4 whitespace-nowrap hover:bg-[#00df9a] hover:text-black rounded-md transition duration-300 ease-in-out cursor-pointer">
          <Link to="/options">Nos Formations</Link>
        </li>
        <li className="p-4 whitespace-nowrap hover:bg-[#00df9a] hover:text-black rounded-md transition duration-300 ease-in-out cursor-pointer">
          <Link to="/about">À Propos</Link>
        </li>
        <li className="p-4 whitespace-nowrap hover:bg-[#00df9a] hover:text-black rounded-md transition duration-300 ease-in-out cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden z-50 cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={`fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] p-4 transform transition-all duration-500 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-3xl font-bold text-[#00df9a] m-4 font-heading">ED4ENGLISH</h1>
        <ul className="uppercase space-y-2">
          <li className="p-4 whitespace-nowrap cursor-pointer bg-transparent border-b border-gray-600 rounded-md hover:bg-[#00df9a] hover:text-black transition duration-300 ease-in-out">
            <Link to="/" onClick={() => setNav(false)}>Accueil</Link>
          </li>
          <li className="p-4 whitespace-nowrap cursor-pointer bg-transparent border-b border-gray-600 rounded-md hover:bg-[#00df9a] hover:text-black transition duration-300 ease-in-out">
            <Link to="/options" onClick={() => setNav(false)}>Nos Formations</Link>
          </li>
          <li className="p-4 whitespace-nowrap cursor-pointer bg-transparent border-b border-gray-600 rounded-md hover:bg-[#00df9a] hover:text-black transition duration-300 ease-in-out">
            <Link to="/about" onClick={() => setNav(false)}>À Propos</Link>
          </li>
          <li className="p-4 whitespace-nowrap cursor-pointer bg-transparent border-b border-gray-600 rounded-md hover:bg-[#00df9a] hover:text-black transition duration-300 ease-in-out">
            <Link to="/contact" onClick={() => setNav(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
