import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { DraggableCardDemo } from "./homeItems/DraggableCardDemo";
import { SparklesCore } from "./ui/sparkles";
import { Landing1 } from "./homeItems/Landing1";
// import { CardsCarousel } from "./homeItems/CardsCarousel";
// import { CardsCarousel1 } from "./homeItems/CardsCarousel1";
import { BoxAboutus } from "./homeItems/BoxAboutus";
import bgImage from "@/assets/beach2.png";

function Home() {
  return (
    <div className="homeclass relative">
      {/* HERO */}
      <section className="sticky min-h-screen flex flex-col items-center justify-center bg-black">
        <Landing1 />
      </section>

      {/* BEACH / DRAGGABLE CARDS */}
      <section
        className="
          relative min-h-screen w-full flex flex-col items-center justify-center
          bg-cover bg-center bg-no-repeat
        "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <DraggableCardDemo />
      </section>

      {/* ABOUT / BLACK SECTION */}
      <section className="sticky min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <BoxAboutus />
      </section>
    </div>
  );
}

export default Home;
