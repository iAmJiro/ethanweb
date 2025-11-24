import React from "react";
import { Link } from "react-router-dom";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { AuroraBackground } from "./ui/aurora-background";

function Rates() {
  return (
    <section className="bg-black md:pt-28">
      <div className="container px-6 py-8 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">
              <EncryptedText
                text="Simple Transparent Pricing"
                encryptedClassName="text-neutral-500"
                revealedClassName="dark:text-white text-white"
                revealDelayMs={50}
              />
            </h2>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Card 1 */}
          <div className="fade-in [animation-delay:0.1s] px-6 py-4 transition-colors duration-200 transform rounded-lg">
            <p className="text-lg font-medium text-white">Intro</p>
            <h4 className="mt-2 text-4xl font-semibold text-white">$0.69</h4>
            <p className="mt-4 text-gray-500 dark:text-gray-300">
              For most businesses that want to optimize web queries.
            </p>

            <div className="mt-8 space-y-8">
              <Feature text="All limited links" />
              <Feature text="Own analytics platform" />
              <Feature text="Chat support" />
              <Feature text="Optimize hashtags" />
              <Feature text="Unlimited users" />
            </div>

            <Link
              to="/contact"
              state={{ plan: "intro" }}
              className="block w-full px-4 py-2 mt-10 font-medium tracking-wide text-white bg-blue-500 rounded-md text-center hover:bg-blue-600"
            >
              Book now!
            </Link>
          </div>

          {/* Card 2 */}
          <div className="fade-in [animation-delay:0.2s] px-6 py-4 transition-colors duration-200 transform rounded-lg">
            <p className="text-lg font-medium text-white">Base</p>
            <h4 className="mt-2 text-4xl font-semibold text-white">$39</h4>
            <p className="mt-4 text-gray-500 dark:text-gray-300">
              For most businesses that want to optimize web queries.
            </p>

            <div className="mt-8 space-y-8">
              <Feature text="All limited links" />
              <Feature text="Own analytics platform" />
              <Feature text="Chat support" />
              <Feature text="Optimize hashtags" />
              <Feature text="Unlimited users" />
            </div>

            <Link
              to="/contact"
              state={{ plan: "base" }}
              className="block w-full px-4 py-2 mt-10 font-medium tracking-wide text-white bg-blue-500 rounded-md text-center hover:bg-blue-600"
            >
              Book now!
            </Link>
          </div>

          {/* Card 3 */}
          <div className="fade-in [animation-delay:0.3s] px-6 py-4 transition-colors duration-200 transform bg-gray-700 rounded-lg dark:bg-gray-600">
            <p className="text-lg font-medium text-gray-100">Popular</p>
            <h4 className="mt-2 text-4xl font-semibold text-gray-100">$99</h4>
            <p className="mt-4 text-gray-300">
              For most businesses that want to optimize web queries.
            </p>

            <div className="mt-8 space-y-8">
              <Feature text="All limited links" dark />
              <Feature text="Own analytics platform" dark />
              <Feature text="Chat support" dark />
              <Feature text="Optimize hashtags" dark />
              <Feature text="Unlimited users" dark />
            </div>

            <Link
              to="/contact"
              state={{ plan: "popular" }}
              className="block w-full px-4 py-2 mt-10 font-medium tracking-wide text-white bg-blue-500 rounded-md text-center hover:bg-blue-600"
            >
              Book now!
            </Link>
          </div>

          {/* Card 4 */}
          <div className="fade-in [animation-delay:0.4s] px-6 py-4 transition-colors duration-200 transform rounded-lg">
            <p className="text-lg font-medium text-white">Enterprise</p>
            <h4 className="mt-2 text-4xl font-semibold text-white">$199</h4>
            <p className="mt-4 text-gray-500 dark:text-gray-300">
              For most businesses that want to optimize web queries.
            </p>

            <div className="mt-8 space-y-8">
              <Feature text="All limited links" />
              <Feature text="Own analytics platform" />
              <Feature text="Chat support" />
              <Feature text="Optimize hashtags" />
              <Feature text="Unlimited users" />
            </div>

            <Link
              to="/contact"
              state={{ plan: "enterprise" }}
              className="block w-full px-4 py-2 mt-10 font-medium tracking-wide text-white bg-blue-500 rounded-md text-center hover:bg-blue-600"
            >
              Book now!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const Feature = ({ text, dark }) => (
  <div className="flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-blue-500"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
    <span className={`mx-4 ${dark ? "text-gray-300" : "text-white"}`}>
      {text}
    </span>
  </div>
);

export default Rates;
