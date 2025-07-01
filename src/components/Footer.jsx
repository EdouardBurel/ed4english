import React from "react";
import { FaTwitterSquare, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Added LinkedIn and Email icons for professionalism
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#012169] text-white">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">
            ED4ENGLISH
          </h1>
          <p className="py-4">
            Boostez votre carrière et vos opportunités personnelles grâce à une
            maîtrise fluide de l'anglais. ED4ENGLISH vous accompagne avec des
            formations adaptées et un coaching personnalisé.
          </p>
          <div className="flex justify-start md:w-[75%] my-2 gap-4 text-2xl">
            {" "}
            {/* Increased gap and icon size for better visibility */}
            <a
              href="URL_DE_VOTRE_PAGE_TWITTER"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivez-nous sur Twitter"
            >
              <FaTwitterSquare className="hover:text-[#A7D7B9] transition-colors duration-200" />
            </a>
            <a
              href="URL_DE_VOTRE_PAGE_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connectez-vous sur LinkedIn"
            >
              <FaLinkedin className="hover:text-[#A7D7B9] transition-colors duration-200" />
            </a>
            <a
              href="mailto:VOTRE_EMAIL@example.com"
              aria-label="Envoyez-nous un email"
            >
              <FaEnvelope className="hover:text-[#A7D7B9] transition-colors duration-200" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-8 lg:mt-0">
          {" "}
          {/* Adjusted margin for better spacing */}
          <div>
            <h6 className="font-medium text-gray-400 mb-4">Navigation</h6>{" "}
            {/* Changed to Navigation for clarity */}
            <ul>
              <Link to="/options">
                <li className="py-2 text-sm hover:text-[#A7D7B9] transition-colors duration-200 cursor-pointer">
                  Nos Formations
                </li>
              </Link>
              <Link to={"/about"}>
              <li className="py-2 text-sm hover:text-[#A7D7B9] transition-colors duration-200 cursor-pointer">
                À Propos
              </li>
              </Link>
              <Link to={"/contact"}>
              <li className="py-2 text-sm hover:text-[#A7D7B9] transition-colors duration-200 cursor-pointer">
                Contact
              </li>
              </Link>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400 mb-4">
              Informations Légales
            </h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#A7D7B9] transition-colors duration-200 cursor-pointer">
                Mentions Légales
              </li>
              <li className="py-2 text-sm hover:text-[#A7D7B9] transition-colors duration-200 cursor-pointer">
                Politique de Confidentialité
              </li>
              <li className="py-2 text-sm hover:text-[#A7D7B9] transition-colors duration-200 cursor-pointer">
                Conditions Générales de Vente
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-3 text-center text-gray-500 text-sm mt-8">
          <p>
            &copy; {new Date().getFullYear()} ED4ENGLISH. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
