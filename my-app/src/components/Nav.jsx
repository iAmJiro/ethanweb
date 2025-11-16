import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/etlogo1.png";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "My Work", path: "/" },
    { label: "Equipment", path: "/equipment" },
    { label: "Services", path: "/services" },
    { label: "Rates", path: "/rates" },
    { label: "Contact us", path: "/contact" },
  ];

  return (
    <header className="bg-neutral-900 text-white selection:bg-white selection:text-black">
      {/* Navbar */}
      <nav className="fixed w-full z-50 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="EGH Logo" className="h-8 sm:h-24 w-auto" />
              <span className="fonttext text-white text-2xl sm:text-3xl font-light tracking-[0.3em]">
                Ethan Holden Photography
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="fonttext hidden md:flex space-x-16 text-xs tracking-[0.2em]">
              {navLinks.map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className="relative group text-white font-medium transition-colors duration-300"
                >
                  {label}
                  <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-2"
            >
              <span
                className={`w-full h-[2px] bg-white transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`w-full h-[2px] bg-white transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-[2px] bg-white transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] pt-24 backdrop-blur-md bg-neutral-900 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible flex flex-col items-center space-y-12"
            : "opacity-0 invisible"
        }`}
      >
        {navLinks.map(({ label, path }) => (
          <Link
            key={label}
            to={path}
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl font-semibold tracking-[0.2em] transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:text-white/70"
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Nav;
