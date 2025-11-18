import React from "react";

function Footer() {
  return (
    <div className="footer w-screen mx-auto">
      <footer
        style={{ backgroundColor: "rgba(20, 20, 20, 1)" }}
        className="p-4 rounded-lg shadow md:px-6 md:py-8"
      >
        <span className="block text-sm text-gray-400 sm:text-center">
          © 2025{" "}
          <a
            href="https://flowbite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white"
          >
            EGH Construction™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}

export default Footer;
