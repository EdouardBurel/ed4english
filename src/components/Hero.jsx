import React from "react";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          Devenez Bilingue. Atteignez Vos Objectifs.
        </p>
        <h1 className="md:text-6xl sm:text-6xl text-4xl font-bold md:py-6 font-heading ">
          Maîtrisez l'Anglais
        </h1>
        {/* Conteneur flex pour assurer que tout reste sur une ligne */}
        <div className="flex justify-center items-center flex-wrap"> {/* Ajout de flex-wrap pour les petits écrans */}
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 whitespace-nowrap"> {/* Ajout de whitespace-nowrap */}
            Avec ED4ENGLISH, développez votre :
          </p>
          <ReactTyped
            // Largeur flexible pour le texte tapé. Ajustez si nécessaire avec 'w-auto' ou 'max-w-full'
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 font-body text-base whitespace-nowrap" // Ajout de whitespace-nowrap
            strings={["aisance orale", "compréhension", "écriture professionnelle"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Formations en ligne, coaching individuel et team building pour entreprises
        </p>
        <button className="bg-[#A7D7B9] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Découvrez Nos Formations
        </button>
      </div>
    </div>
  );
}

export default Hero;