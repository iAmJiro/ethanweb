import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer></Footer>
  </Router>
);
