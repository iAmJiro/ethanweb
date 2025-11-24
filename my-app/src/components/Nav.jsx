// src/components/SiteNav.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "@/assets/etlogo1.png";

import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "My Work", link: "/" },
  { name: "Rates", link: "/rates" },
  { name: "Contact us", link: "/contact" },
];

import GalleryRouter from "./gallery/GalleryRouter";

export default function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar className="fixed inset-x-0 top-0 z-50">
      {/* Desktop nav */}
      <NavBody>
        {/* Logo + name */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Ethan Holden Photography"
            className="h-8 sm:h-20 w-auto"
          />
          {/* Optional text logo */}
          {/* <span className="fonttext text-xs sm:text-lg md:text-xl font-light tracking-[0.3em] uppercase text-black dark:text-white">
            Ethan Holden Photography
          </span> */}
        </Link>

        {/* Center links */}
        <nav className="relative flex flex-1 justify-center">
          <div className="flex items-center space-x-2 fonttext uppercase tracking-[0.2em] text-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Optional right-side button */}
        {/* <NavbarButton as={Link} to="/contact" variant="dark">
          Book a shoot
        </NavbarButton> */}
      </NavBody>

      {/* Mobile nav */}
      {/* Mobile nav */}
      <MobileNav>
        <MobileNavHeader>
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Ethan Holden Photography"
              className="h-8 w-auto"
            />
            <span className="fonttext text-sm font-light tracking-[0.2em] uppercase text-white">
              Ethan Holden
            </span>
          </Link>

          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="mobile-nav-toggle"
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              onClick={() => setIsOpen(false)}
              className="w-full text-left text-white text-sm font-medium tracking-[0.2em] uppercase hover:text-neutral-300 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
