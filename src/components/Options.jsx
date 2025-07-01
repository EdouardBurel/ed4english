import React from "react";
import Icon1 from "../assets/icon1.png"; // Assurez-vous que ces icônes sont pertinentes
import Icon2 from "../assets/icon2.png"; // et de bonne qualité
import Icon3 from "../assets/icon3.png"; // et de bonne qualité
import Footer from "./Footer";

function Options() {
  return (
    <div>
      <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          {/* Option 1: Formation Complète */}
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white rounded-lg"
              src={Icon2}
              alt="Icône de progression"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Formation Complète
            </h2>
            <p className="text-center text-4xl font-bold text-[#1D3B34]">
              Maîtrisez l'anglais de A à Z
            </p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                Programme intensif de 15h
              </p>
              <p className="py-2 border-b mx-8">
                Cours individuels ou en petit groupe
              </p>
              <p className="py-2 border-b mx-8">Tarif : à partir de 500 €</p>
            </div>
            <button className=" bg-[#A7D7B9] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
              En savoir plus
            </button>
          </div>

          {/* Option 2: Anglais Professionnel / Spécifique */}
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
              src={Icon1}
              alt="Icône d'objectifs professionnels"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Anglais Professionnel
            </h2>
            <p className="text-center text-4xl font-bold text-[#1D3B34]">
              Développez vos compétences métiers
            </p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                Anglais des affaires, technique, etc.
              </p>
              <p className="py-2 border-b mx-8">
                Préparation à des certifications (TOEIC, TOEFL)
              </p>
              <p className="py-2 border-b mx-8">
                Sessions ciblées et personnalisées
              </p>
              <p className="py-2 border-b mx-8">
                Devis personnalisé sur demande
              </p>
            </div>
            <button className=" bg-black text-[#A7D7B9] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Demander un Devis
            </button>
          </div>

          {/* Option 3: Coaching / Conversation */}
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Icon3} // Vous voudrez peut-être une icône différente ici
              alt="Icône de dialogue"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Coaching Conversationnel
            </h2>
            <p className="text-center text-4xl font-bold text-[#1D3B34]">
              Gagnez en aisance à l'oral
            </p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">
                Amélioration de la fluidité
              </p>
              <p className="py-2 border-b mx-8">
                Discussions sur des thèmes variés
              </p>
              <p className="py-2 border-b mx-8">
                Correction et conseils personnalisés
              </p>
              <p className="py-2 border-b mx-8">
                Forfait à l'heure ou par packs
              </p>
            </div>
            <button className=" bg-[#A7D7B9] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
              Réserver une Séance
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F4F9F6] py-16 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3B34] mb-6">
            Grille tarifaire et formations proposées
          </h2>
          <ul className="text-lg md:text-xl text-[#1D3B34] space-y-3">
            <li>
              Cours particulier : <strong>38€/heure</strong>
            </li>
            <li>
              10 h de formation : <strong>350€</strong>
            </li>
            <li>
              20 h de formation : <strong>640€</strong>
            </li>
            <li>
              30 h de formation : <strong>900€</strong>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Options;
