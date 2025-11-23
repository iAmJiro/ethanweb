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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div class="homeclass relative">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-black">
        <Landing1 />
      </div>
      {/* <div class="sticky top-0 h-screen zflex flex-col items-center justify-center bg-amber-600 text-white">
        <DraggableCardDemo />
      </div> */}
      <div
        className="
    relative h-screen w-full flex flex-col items-center justify-center
    bg-cover bg-center bg-no-repeat
  "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <DraggableCardDemo />
      </div>

      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-black text-white">
        <BoxAboutus />
      </div>
    </div>
  );
}

export default Home;
