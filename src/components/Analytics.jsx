import React from "react";
import Teaching from "../assets/teaching.png"; // Assurez-vous que cette image est appropriée
import Profile from "../assets/profil.png"; // Assurez-vous que cette image est votre photo

function Analytics() {
  return (
    <div>
      <div className="w-full bg-[#1D3B34] py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className=" w-[500px] mx-auto my-4 rounded-md"
            src={Teaching}
            alt="Image de formation en anglais"
          />
          <div className="flex flex-col justify-center">
            <p className="text-5xl text-[#A7D7B9] font-bold">
              Formations Dynamiques et Immersives
            </p>
            <h1 className="text-white md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Améliorez votre expression orale avec confiance
            </h1>
            <p className="text-[#A7D7B9]">
              Chez ED4ENGLISH, nous concevons des programmes de formation en anglais sur mesure, adaptés à vos besoins spécifiques. Que vous soyez un professionnel cherchant à perfectionner votre anglais des affaires ou un particulier désireux de voyager sereinement, nos méthodes interactives et notre approche pédagogique ciblée vous garantiront des progrès rapides et durables.
            </p>
            <button className=" text-[#FDFDFD] bg-[#A7D7B9] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Voir Nos Méthodes
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#A7D7B9] py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center gap-8">
          <div className="flex justify-center lg:justify-start">
            <img
              className="w-52 h-52 object-cover rounded-full shadow-lg"
              src={Profile}
              alt="Photo de profil d'Édouard, formateur anglais"
            />
          </div>

          <div className="flex flex-col justify-center lg:justify-start">
            <p className="text-4xl md:text-5xl text-[#1D3B34] font-bold mb-2">
              Qui suis-je ?
            </p>
            <h1 className="text-black md:text-4xl sm:text-3xl text-2xl font-semibold italic mb-4">
              Hello, je suis Édouard
            </h1>
            <p className="text-[#1D3B34] leading-relaxed">
              En tant que formateur et passionné d'anglais, j'ai accompagné de nombreux apprenants dans l'atteinte de leurs objectifs linguistiques. Mon approche est basée sur l'écoute active et la création d'un environnement d'apprentissage stimulant où chacun peut s'exprimer librement. Fort d'une expérience significative dans l'enseignement et la formation professionnelle, je m'engage à vous fournir les outils et la confiance nécessaires pour maîtriser l'anglais et l'utiliser efficacement dans votre vie personnelle et professionnelle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;