import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Contact from "./components/contact";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import wattIcon from "/wattwiselogo.jpg"; 
import wattIcon2 from "/wattwiselogo.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAdmin = location.pathname === "/admin";
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {!isAdmin && (
        <div
          className="absolute top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/wattbg.jpg')", //bg
          }}
        ></div>
      )}

      {!isAdmin && <Navbar />}

      <AnimatePresence>
        {isHome && !isAdmin && (
          <div className="flex justify-center mt-[16vh]">
            <motion.div
              key="watt-icon"
              className="relative w-[22vh] h-[22vh] max-w-[300px] max-h-[300px] rounded-full"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              <motion.div
                className="w-full h-full rounded-full border-4 border-white shadow-lg"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.img
                  key="front-img"
                  src={wattIcon}
                  alt="Wattwise Icon"
                  className="absolute w-full h-full rounded-full"
                  style={{ backfaceVisibility: "hidden" }}
                />

                <motion.img
                  key="back-img"
                  src={wattIcon2}
                  alt="Wattwise Icon Flipped"
                  className="absolute w-full h-full rounded-full"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className={`${isHome ? "overflow-hidden h-screen" : "h-screen overflow-auto"} relative flex flex-col`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element ={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;