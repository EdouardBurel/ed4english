import React from "react";
import Teaching from "../assets/teaching.png";
import Profile from "../assets/profil01.jpeg";
import Footer from "./Footer";

function Analytics() {
  return (
    <div>
      {/* Section Formations */}
      <div className="w-full bg-[#1D3B34] pt-28 px-4 mb-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <img
              className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] rounded-lg shadow-lg object-cover"
              src={Teaching}
              alt="formation ED4ENGLISH"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col text-center md:text-left">
            <p className="text-3xl sm:text-4xl md:text-5xl text-[#A7D7B9] font-bold mb-4">
              Formations Dynamiques et Immersives
            </p>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Améliorez votre expression orale avec confiance
            </h1>
            <p className="text-[#A7D7B9] text-base sm:text-lg leading-relaxed mb-10">
              Chez <strong>ED4ENGLISH</strong>, nous concevons des programmes de
              formation en anglais sur mesure, adaptés à vos besoins
              spécifiques. Que vous soyez un professionnel cherchant à
              perfectionner votre anglais des affaires ou un particulier
              désireux de voyager sereinement, nos méthodes interactives et
              notre approche pédagogique ciblée vous garantiront des progrès
              rapides et durables.
            </p>
          </div>
        </div>
      </div>

      {/* Section Profil */}
      <div className="w-full bg-[#A7D7B9] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              className="w-32 sm:w-40 md:w-52 lg:w-64 xl:w-72 aspect-[3/4] object-cover rounded-lg shadow-lg"
              src={Profile}
              alt="Édouard"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col text-center md:text-left px-2">
            <p className="text-3xl sm:text-4xl md:text-5xl text-[#1D3B34] font-bold mb-2">
              Qui suis-je ?
            </p>
            <h1 className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold italic mb-4">
              Hello, je suis Édouard
            </h1>
            <p className="text-[#1D3B34] text-base sm:text-lg leading-relaxed">
              En tant que formateur et passionné d'anglais, j'ai accompagné de
              nombreux apprenants dans l'atteinte de leurs objectifs
              linguistiques. Mon approche est basée sur l'écoute active et la
              création d'un environnement d'apprentissage stimulant où chacun
              peut s'exprimer librement.
              <br />
              <br />
              Fort d'une expérience significative dans l'enseignement et la
              formation professionnelle, je m'engage à vous fournir les outils
              et la confiance nécessaires pour maîtriser l'anglais et l'utiliser
              efficacement dans votre vie personnelle et professionnelle.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Analytics;
