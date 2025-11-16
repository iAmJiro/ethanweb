import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="homeclass relative">
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-black">
        <h2 class="text-4xl">The First Title</h2>
        <p>Scroll Down</p>
      </div>
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-amber-700 text-white">
        <h2 class="text-4xl">The Second Title</h2>
        <p>Scroll Down</p>
      </div>
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-purple-600 text-white">
        <h2 class="text-4xl">The Third Title</h2>
        <p>Scroll Down</p>
      </div>
      <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-neutral-800 text-white">
        <h2 class="text-4xl">The Fourth Title</h2>
      </div>
    </div>
  );
}

export default Home;
