import React, { useEffect } from "react";
import { motion } from "framer-motion";
// IMPORT YOUR IMAGES
import car2 from "../../img/car2.jpg";
import car3 from "../../img/car3.jpg";
import car4 from "../../img/car4.jpg";
import car5 from "../../img/car5.jpg";
import car6 from "../../img/car6.jpg";

// 🔥 CUSTOM IMAGE-ONLY CARD GRID (NO WHITESPACE)
function ImageGrid({ cards }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-6 pb-20">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="rounded-xl overflow-hidden border border-neutral-800 hover:scale-[1.02] transition-transform duration-300"
        >
          <img
            src={card.src}
            alt={card.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function Cars() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const cards = [
    { title: "Forest Adventure", src: car2 },
    { title: "Valley of life", src: car3 },
    { title: "Sala behta hi jayega", src: car4 },
    { title: "Camping is for pros", src: car5 },
    { title: "The road not taken", src: car6 },
    { title: "The First Rule", src: car6 },
  ];

  return (
    <motion.div
      className="pt-30 bg-black min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <ImageGrid cards={cards} />
    </motion.div>
  );
}
