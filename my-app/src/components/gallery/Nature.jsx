import React, { useEffect } from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { motion } from "framer-motion";

import nature1 from "../../img/nature1.jpg";
import nature2 from "../../img/nature2.jpg";
import nature3 from "../../img/nature3.jpg";
import nature4 from "../../img/nature4.jpg";
import nature5 from "../../img/nature5.jpg";
import nature6 from "../../img/nature6.jpg";

function ImageGrid({ cards }) {
  return (
    <div className="px-6 pb-20 columns-1 md:columns-2 xl:columns-3 gap-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="mb-6 break-inside-avoid rounded-xl overflow-hidden border border-neutral-800 hover:scale-[1.02] transition-transform duration-300 inline-block w-full"
        >
          <img
            src={card.src}
            alt={card.title}
            className="w-full h-auto object-cover"
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
    { title: "Forest Adventure", src: nature1 },
    { title: "Valley of life", src: nature2 },
    { title: "Sala behta hi jayega", src: nature3 },
    { title: "Camping is for pros", src: nature4 },
    { title: "The road not taken", src: nature5 },
    { title: "The First Rule", src: nature6 },
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
