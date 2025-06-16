import React from "react";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="text-white">
      <div className="w-full h-screen bg-gradient-to-b from-[#012169] via-[#912030] to-[#dbd9d9] flex items-center justify-center">
        <div className="max-w-[800px] w-full mx-auto text-center flex flex-col justify-center px-4">
          <p className="text-[#00df9a] font-bold p-4">
            Ed B or not to be?
            <span className="block">
              Devenez Bilingue. Atteignez Vos Objectifs.
            </span>
          </p>
          <h1 className="md:text-6xl sm:text-6xl text-4xl font-bold md:py-6 font-heading text-white">
            Maîtrisez l'Anglais
          </h1>
          <div className="flex justify-center items-center flex-wrap">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 whitespace-nowrap text-white">
              Avec ED4ENGLISH, développez votre :
            </p>
            <ReactTyped
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 font-body text-[#A7D7B9] whitespace-nowrap"
              strings={[
                "aisance orale",
                "compréhension",
                "écriture professionnelle",
              ]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <div className="mt-12 text-center">
            <p className="md:text-2xl text-xl font-bold text-gray-100">
              Formations en ligne, coaching individuel et team building pour
              entreprises
            </p>
            <button className="bg-[#A7D7B9] w-[200px] rounded-md font-medium mt-6 mx-auto py-3 text-black">
              <Link to="/options">Découvrez Nos Formations</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
