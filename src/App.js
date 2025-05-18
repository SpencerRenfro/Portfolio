import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Navigation from "./components/Navigation";
import ImagePreloader from "./components/ImagePreloader";

const App = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Set images as loaded after a short delay to prevent flickering
  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preload all images */}
      <ImagePreloader />

      {/* Show loading spinner until images are loaded */}
      {!imagesLoaded && (
        <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-900 z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* Main application */}
      <div className={`transition-opacity duration-300 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
