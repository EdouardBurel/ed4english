import React, { useState } from "react";
import { motion } from "framer-motion";

const flashcards = {
  business: [
    {
      front: "Invoice",
      back: "A document requesting payment for goods/services",
    },
    {
      front: "Stakeholder",
      back: "A person with an interest in the success of a company",
    },
  ],
  general: [
    { front: "Library", back: "A place where you borrow books" },
    { front: "Breakfast", back: "First meal of the day" },
  ],
};

export default function FlashcardGame() {
  const [mode, setMode] = useState("");
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const cards = flashcards[mode] || [];

  const handleNext = () => {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="min-h-screen bg-[#f2f2f2] flex flex-col items-center justify-center p-4">
      {!mode ? (
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold">Choisissez un mode</h1>
          <button
            className="bg-blue-800 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-900"
            onClick={() => setMode("business")}
          >
            Business English
          </button>
          <button
            className="bg-green-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-800"
            onClick={() => setMode("general")}
          >
            General English
          </button>
        </div>
      ) : (
        <div className="text-center">
          <motion.div
            className="relative w-72 h-48 cursor-pointer"
            onClick={() => setFlipped(!flipped)}
            initial={false}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ perspective: 1000 }}
          >
            {/* Front Side */}
            <div
              className="absolute w-full h-full bg-white border-2 border-gray-300 shadow-lg rounded-xl flex items-center justify-center px-4"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(0deg)", // <--- Add this!
              }}
            >
              {cards[index].front}
            </div>

            {/* Back Side */}
            <div
              className="absolute w-full h-full bg-white border-2 border-gray-300 shadow-lg rounded-xl flex items-center justify-center px-4"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              {cards[index].back}
            </div>
          </motion.div>

          <button
            className="bg-[#1D3B34] text-white px-6 py-2 rounded-md mt-6"
            onClick={handleNext}
          >
            Suivant
          </button>
          <div className="mt-4">
            <button
              className="text-sm text-blue-500 underline"
              onClick={() => {
                setMode("");
                setIndex(0);
                setFlipped(false);
              }}
            >
              Changer de mode
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
