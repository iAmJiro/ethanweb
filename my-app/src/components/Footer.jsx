import React from "react";

function Footer() {
  return (
    <div className="footer w-full mx-auto">
      <footer className="w-full overflow-hidden bg-black text-white border-t border-neutral-800 py-2">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
          {/* Logo or Brand Name */}
          <h3 className="text-xl font-semibold tracking-tight">Your Brand</h3>

          {/* Instagram Icon */}
          <a
            href="https://instagram.com/ethanholdenphotography"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* Small text */}
          <p className="mb-10 text-neutral-500 text-sm text-center">
            © {new Date().getFullYear()} Ethan Hoden Photography. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
