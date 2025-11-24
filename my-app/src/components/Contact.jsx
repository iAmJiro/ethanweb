import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { EncryptedText } from "./ui/encrypted-text";

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Booking options (must match what you pass from Rates: intro, base, popular, enterprise)
const planOptions = [
  { id: "intro", label: "Intro – $0.69" },
  { id: "base", label: "Base – $39" },
  { id: "popular", label: "Popular – $99" },
  { id: "enterprise", label: "Enterprise – $199" },
];

const Contact = () => {
  const location = useLocation();
  const form = useRef();

  // get initial plan from navigation state (from Rates)
  const [selectedPlan, setSelectedPlan] = useState(location.state?.plan || "");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // if you navigate again with another plan, sync it
  useEffect(() => {
    if (location.state?.plan) {
      setSelectedPlan(location.state.plan);
    }
  }, [location.state]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hyexll9",
        "template_yglvh78",
        form.current,
        "byMpOZOmxO-zU25xa"
      )
      .then(() => {
        // hide form + show confirmation message
        setIsSubmitted(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="bg-black dark:bg-black" id="contact">
      <motion.div
        className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 lg:py-20"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Title Section */}
        <motion.div className="mb-10 p-10" variants={fadeInVariant}>
          <div className="mb-10 max-w-3xl text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-white text-3xl sm:text-5xl">
              <EncryptedText text="Get in Touch" />
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-400">
              We will get back to you as soon as possible!
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-stretch justify-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div className="h-full pr-6" variants={fadeInVariant}>
              <p className="mt-3 mb-12 text-lg text-slate-400">
                My skills in photography are something you can count on.
              </p>
              <ul className="mb-6 md:mb-0">
                {/* Address */}
                <motion.li className="flex" variants={fadeInVariant}>
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-white">
                      Our Address
                    </h3>
                    <p className="text-slate-400">
                      ethans company address here hehe
                    </p>
                    <p className="text-slate-400">lumsden school</p>
                  </div>
                </motion.li>

                {/* Contact */}
                <motion.li className="flex" variants={fadeInVariant}>
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                      <path d="M15 7a2 2 0 0 1 2 2" />
                      <path d="M15 3a6 6 0 0 1 6 6" />
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-white">
                      Contact
                    </h3>
                    <p className="text-slate-400">Mobile: 027-393-6804</p>
                    <p className="text-slate-400">
                      Email: eghconstructionltd@gmail.com
                    </p>
                  </div>
                </motion.li>

                {/* Hours */}
                <motion.li className="flex" variants={fadeInVariant}>
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-white">
                      Business Hours
                    </h3>
                    <p className="text-slate-400">Monday - Friday 5:30pm-8pm</p>
                    <p className="text-slate-400">Saturday & Sunday 8am-4pm</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>

            {/* Contact Form / Confirmation */}
            <motion.div
              className="card h-fit max-w-6xl p-5 md:p-12"
              id="form"
              variants={fadeInVariant}
            >
              {isSubmitted ? (
                <motion.div
                  variants={fadeInVariant}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4 text-center"
                >
                  <h2 className="mb-2 text-2xl font-bold text-white">
                    We received your request!
                  </h2>
                  <p className="text-lg text-slate-300">
                    I will reply to you soon.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h2 className="mb-4 text-2xl font-bold text-white">
                    Ready to Get Started?
                  </h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-6">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <motion.input
                          type="text"
                          name="from_name"
                          placeholder="Your name"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-300 bg-neutral-800"
                          required
                          variants={fadeInVariant}
                        />
                        <motion.input
                          type="email"
                          name="from_email"
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-300 bg-neutral-800"
                          required
                          variants={fadeInVariant}
                        />
                        <motion.input
                          type="tel"
                          name="phone"
                          placeholder="Your phone number"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-300 bg-neutral-800"
                          variants={fadeInVariant}
                        />

                        {/* Booking options just below phone number */}
                        <motion.div className="mt-4" variants={fadeInVariant}>
                          <p className="mb-2 text-sm font-medium text-slate-300">
                            Choose a package
                          </p>
                          <div className="flex flex-wrap gap-3">
                            {planOptions.map((option) => (
                              <motion.button
                                key={option.id}
                                type="button"
                                onClick={() => setSelectedPlan(option.id)}
                                className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ease-out transform
                                  ${
                                    selectedPlan === option.id
                                      ? "bg-neutral-700 border-white text-white scale-105"
                                      : "border-neutral-600 text-slate-300 hover:bg-neutral-900"
                                  }`}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                              >
                                {option.label}
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      </div>

                      <div className="mx-0 mb-1 sm:mb-4">
                        <motion.textarea
                          name="message"
                          rows="5"
                          placeholder="Write your message..."
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-300 bg-neutral-800"
                          required
                          variants={fadeInVariant}
                        ></motion.textarea>
                      </div>
                    </div>

                    {/* Hidden field so EmailJS also receives the plan */}
                    <input
                      type="hidden"
                      name="selected_plan"
                      value={selectedPlan || ""}
                    />

                    <div className="text-center">
                      <motion.button
                        type="submit"
                        className="w-full bg-blue-800 text-white pt-6 py-3 font-xl rounded-md hover:bg-blue-700 transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variants={fadeInVariant}
                      >
                        Send Message
                      </motion.button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
