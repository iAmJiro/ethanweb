"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { BeforeContact } from "./BeforeContact";

export function Landing1() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="fonttext md:text-7xl text-5xl lg:text-8xl font-bold text-center text-white relative z-20">
        <EncryptedText
          text="Ethan Holden Photography"
          encryptedClassName="text-neutral-500"
          revealedClassName="dark:text-white text-white"
          revealDelayMs={50}
        />
      </h1>
      <h2 className="fade-in [animation-delay:0.5s] md:text-7xl text-5xl lg:text-2xl font-bold text-center text-white relative z-20">
        Scroll down to explore
      </h2>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <BeforeContact />
    </div>
  );
}
