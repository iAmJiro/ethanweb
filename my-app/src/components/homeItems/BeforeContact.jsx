"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal, // Import the hook to control the modal state
} from "../ui/animated-modal";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import car14 from "../../img/car14.jpg";
import car15 from "../../img/car15.jpg";
import car16 from "../../img/car16.jpg";
import car17 from "../../img/car17.jpg";
import car18 from "../../img/car18.jpg";

export function BeforeContact() {
  const images = [car14, car15, car16, car17, car18];

  return (
    <div className="py-1 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black text-white hover:bg-black hover:text-white focus:bg-black focus:text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Book a session!
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            📷
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8 md:pt-4">
              Book your session with{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                ME
              </span>{" "}
              now! 📷
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{ rotate: Math.random() * 20 - 10 }}
                  whileHover={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                  whileTap={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`Portfolio car ${idx + 1}`} // More accurate description
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                  />
                </motion.div>
              ))}
            </div>

            {/* Features List */}
            <div className="py-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-md mx-auto px-4">
              {/* <Feature icon={<PlaneIcon />} text="5,000+ shots captured" />
              <Feature icon={<ElevatorIcon />} text="12 curated galleries" /> */}
              <Feature icon={<BulletIcon />} text="Client-focused direction" />
              <Feature icon={<BulletIcon />} text="5 years behind the lens" />
              <Feature icon={<BulletIcon />} text="Easy communication" />
              <Feature icon={<BulletIcon />} text="Sharp detail edits" />
            </div>
          </ModalContent>

          <ModalFooter className="gap-4">
            <BookNowButton />
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

// Sub-component to handle the Modal closing logic correctly
const BookNowButton = () => {
  const { setOpen } = useModal(); // Access the internal state of the modal

  const handleNavigation = () => {
    setOpen(false); // Close the modal

    // Allow the modal closing animation to begin before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <Link
      to="/contact"
      onClick={handleNavigation}
      className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28 flex items-center justify-center"
    >
      Book Now
    </Link>
  );
};

// Reusable Feature component to keep the JSX clean
const Feature = ({ icon, text }) => (
  <div className="flex items-center space-x-3">
    <div className="flex-shrink-0 text-neutral-700 dark:text-neutral-300 h-5 w-5">
      {icon}
    </div>
    <span className="text-neutral-700 dark:text-neutral-300 text-sm font-medium whitespace-nowrap">
      {text}
    </span>
  </div>
);

/* --- Icons (Unchanged) --- */
const PlaneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
  </svg>
);
const VacationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
    <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
    <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
    <path d="M15 9l-3 5.196" />
    <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
  </svg>
);
const ElevatorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
    <path d="M10 10l2 -2l2 2" />
    <path d="M10 14l2 2l2 -2" />
  </svg>
);
const FoodIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
  </svg>
);
const MicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
    <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
  </svg>
);
const ParachuteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 12a10 10 0 1 0 -20 0" />
    <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
    <path d="M2 12l10 10l-3.5 -10" />
    <path d="M15.5 12l-3.5 10l10 -10" />
  </svg>
);
const BulletIcon = () => (
  <div className="h-1.5 w-1.5 rounded-full bg-black dark:bg-neutral-500 mt-2" />
);
