// src/components/SiteNav.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "@/assets/etlogo1.png"; // or "../../assets/etlogo1.png" if alias isn't set

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  // NavbarButton, // optional if you want a CTA on the right
} from "@/components/ui/resizable-navbar"; // adjust path to your file

const navItems = [
  { name: "My Work", link: "/" },
  { name: "Rates", link: "/rates" },
  { name: "Contact us", link: "/contact" },
];

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
          {/* <span className="fonttext text-xs sm:text-lg md:text-xl font-light tracking-[0.3em] uppercase text-black dark:text-white">
            Ethan Holden Photography
          </span> */}
        </Link>

        {/* Center links */}
        <NavItems
          items={navItems}
          onItemClick={() => setIsOpen(false)}
          className="fonttext uppercase tracking-[0.2em]"
        />

        {/* Optional right-side button */}
        {/* <NavbarButton as={Link} to="/contact" variant="dark">
          Book a shoot
        </NavbarButton> */}
      </NavBody>

      {/* Mobile nav */}
      <MobileNav>
        <MobileNavHeader>
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Ethan Holden Photography"
              className="h-8 w-auto"
            />
            <span className="fonttext text-sm font-light tracking-[0.2em] uppercase text-black dark:text-white">
              Ethan Holden
            </span>
          </Link>

          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              onClick={() => setIsOpen(false)}
              className="w-full text-left text-neutral-900 dark:text-neutral-100 text-sm font-medium tracking-[0.2em] uppercase"
            >
              {item.name}
            </Link>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
