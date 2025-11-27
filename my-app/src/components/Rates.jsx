import React from "react";
import { Link } from "react-router-dom";
import { EncryptedText } from "@/components/ui/encrypted-text";
import Footer from "./Footer";

function Rates() {
  return (
    <section className="bg-black md:pt-28 pt-20">
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

        {/* Pricing + Sidebar layout */}
        <div className="mt-16 lg:grid lg:grid-cols-[3fr,1.2fr] lg:gap-12">
          {/* Pricing Grid */}
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {/* Card 1 */}
            <div className="fade-in [animation-delay:0.1s] px-6 py-4 transition-colors duration-200 transform rounded-lg">
              <p className="text-lg font-medium text-white">
                Portrait /Lifestyle Session
              </p>
              <h4 className="mt-2 text-4xl font-semibold text-white">
                $150.00
              </h4>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                For most businesses that want to optimize web queries.
              </p>

              <div className="mt-8 space-y-8">
                <Feature text="1 hour session" />
                <Feature text="8 edited photos" />
                <Feature text="Online gallery delivery" />
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
              <p className="text-lg font-medium text-white">
                Couples /Engagement
              </p>
              <h4 className="mt-2 text-4xl font-semibold text-white">
                $220.00
              </h4>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                For most businesses that want to optimize web queries.
              </p>

              <div className="mt-8 space-y-8">
                <Feature text="1.5 hour session" />
                <Feature text="12 edited photos" />
                <Feature text="1–2 locations" />
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
            <div className="fade-in [animation-delay:0.4s] px-6 py-4 transition-colors duration-200 transform rounded-lg">
              <p className="text-lg font-medium text-gray-100">
                Family Session
              </p>
              <h4 className="mt-2 text-4xl font-semibold text-gray-100">
                $250.00
              </h4>
              <p className="mt-4 text-gray-300">
                For most businesses that want to optimize web queries.
              </p>

              <div className="mt-8 space-y-8">
                <Feature text="1 hour session" dark />
                <Feature text="12 edited photos" dark />
                <Feature text="Up to 5 people" dark />
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
              <p className="text-lg font-medium text-white">
                Event Photography (Beginner)
              </p>
              <h4 className="mt-2 text-4xl font-semibold text-white">
                $120/hr
              </h4>
              <h4 className="mt-2 text-sm font-semibold text-white">
                minimum 2 hours
              </h4>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                For most businesses that want to optimize web queries.
              </p>

              <div className="mt-8 space-y-8">
                <Feature text="All usable images lightly edited" />
                <Feature text="15 edited images" />
                <Feature text="Great for parties, small events, openings" />
              </div>

              <Link
                to="/contact"
                state={{ plan: "enterprise" }}
                className="block w-full px-4 py-2 mt-10 font-medium tracking-wide text-white bg-blue-500 rounded-md text-center hover:bg-blue-600"
              >
                Book now!
              </Link>
            </div>

            {/* Card 5 */}
            <div className="fade-in [animation-delay:0.4s] px-6 py-4 transition-colors duration-200 transform rounded-lg">
              <p className="text-lg font-medium text-white">
                Business / Branding Session
              </p>
              <h4 className="mt-2 text-4xl font-semibold text-white">
                $180/hr
              </h4>
              <h4 className="mt-2 text-sm font-semibold text-black">.</h4>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                For most businesses that want to optimize web queries.
              </p>

              <div className="mt-8 space-y-8">
                <Feature text="1 hour" />
                <Feature text="10 edited images" />
                <Feature text="Perfect for small businesses & socials" />
              </div>

              <Link
                to="/contact"
                state={{ plan: "enterprise" }}
                className="block w-full px-4 py-2 mt-10 font-medium tracking-wide text-white bg-blue-500 rounded-md text-center hover:bg-blue-600"
              >
                Book now!
              </Link>
            </div>

            {/* Card 6 */}
            <div className="fade-in [animation-delay:0.4s] px-6 py-4 transition-colors duration-200 transform rounded-lg">
              <p className="text-lg font-medium text-white">Add ons</p>
              <h4 className="mt-2 text-4xl font-semibold text-white">
                $15 each
              </h4>
              <h4 className="mt-2 text-sm font-semibold text-black">.</h4>

              <p className="mt-4 text-gray-500 dark:text-gray-300">
                For most businesses that want to optimize web queries.
              </p>

              <div className="mt-8 space-y-8">
                <Feature text="Extra hour $80.00" />
                <Feature text="Travel fee: $0.80/km outside local area" />
                <Feature text="Priority 48-hour delivery: $40.00" />
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

          {/* "What's included?" sidebar */}
          <aside className="mt-10 lg:mt-0 px-6 py-6 rounded-2xl border border-neutral-800 bg-neutral-900/80 text-white lg:sticky lg:top-28 mx-0 md:mx-0">
            <h3 className="text-2xl font-semibold mb-3">
              What&apos;s included?
            </h3>
            <p className="text-sm text-neutral-300 mb-5">
              Every session comes with the same level of care, communication and
              attention to detail.
            </p>

            <ul className="space-y-3 text-sm">
              <IncludedItem text="Pre-shoot planning & consultation" />
              <IncludedItem text="Professional editing on all selected images" />
              <IncludedItem text="High-resolution files for print & social" />
              <IncludedItem text="Online gallery delivery & download links (Within 5-7 days)" />
              <IncludedItem text="Basic skin & color correction" />
            </ul>

            <p className="mt-6 text-xs text-neutral-400">
              Looking for something specific?{" "}
              <Link
                to="/contact"
                className="underline underline-offset-4 text-blue-400 hover:text-blue-300"
              >
                Get in touch for a custom quote.
              </Link>
            </p>
          </aside>
        </div>
      </div>

      <Footer />
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

const IncludedItem = ({ text }) => (
  <li className="flex items-start gap-2">
    <span className="mt-[3px] h-2 w-2 rounded-full bg-blue-500" />
    <span>{text}</span>
  </li>
);

export default Rates;
