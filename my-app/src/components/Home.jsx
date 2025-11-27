import React from "react";
import { DraggableCardDemo } from "./homeItems/DraggableCardDemo";
import { SparklesCore } from "./ui/sparkles";
import { Landing1 } from "./homeItems/Landing1";
import { BoxAboutus } from "./homeItems/BoxAboutus";
import bgImage from "@/assets/beach2.png";
import Footer from "./Footer";

function Home() {
  return (
    // Full-page column layout
    <div className="homeclass min-h-screen flex flex-col bg-black">
      {/* Main scrollable content */}
      <main className="flex-1">
        {/* HERO */}
        <section className="min-h-screen flex flex-col items-center justify-center bg-black">
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
      </main>

      {/* FOOTER – always at the bottom */}
      <Footer />
    </div>
  );
}

export default Home;
