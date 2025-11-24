"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    // Only run hover events on desktop (md and up)
    onMouseEnter={() => window.innerWidth >= 768 && setHovered(index)}
    onMouseLeave={() => window.innerWidth >= 768 && setHovered(null)}
    className={cn(
      "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",

      // Apply blur only on desktop
      hovered !== null &&
        hovered !== index &&
        window.innerWidth >= 768 &&
        "blur-sm scale-[0.98]"
    )}
  >
    <img
      src={card.src}
      alt={card.title}
      className="object-cover absolute inset-0"
    />

    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
        hovered === index && window.innerWidth >= 768
          ? "opacity-100"
          : "opacity-0"
      )}
    >
      <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
        {card.title}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto w-full",

        // Add horizontal padding only on mobile
        "px-4 md:px-8"
      )}
    >
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
