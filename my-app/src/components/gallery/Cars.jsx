import React, { useEffect } from "react";
import { motion } from "framer-motion";
// IMPORT YOUR IMAGES
import car2 from "../../img/car2.jpg";
import car3 from "../../img/car3.jpg";
import car4 from "../../img/car4.jpg";
import car5 from "../../img/car5.jpg";
import car6 from "../../img/car6.jpg";

// 🔥 CUSTOM IMAGE-ONLY CARD GRID (NO WHITESPACE)
function ImageGrid({ cards, onImageClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-6 pb-20">
      {cards.map((card, idx) => (
        <div
          key={idx}
          onClick={() => onImageClick(card.src)}
          className="rounded-xl overflow-hidden border border-neutral-800 
                     hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
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
  const [selectedImage, setSelectedImage] = React.useState(null);

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
    <>
      <motion.div
        className="pt-30 bg-black min-h-screen"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <ImageGrid cards={cards} onImageClick={setSelectedImage} />
      </motion.div>

      {/* FULLSCREEN IMAGE MODAL */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl object-contain"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-4xl font-light"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </motion.div>
      )}
    </>
  );
}
