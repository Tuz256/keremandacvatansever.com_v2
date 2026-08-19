import { useState, useEffect, useRef } from "react";
import { TbArrowBigUpFilled } from "react-icons/tb";
import { Routes, Route } from "react-router-dom";

// page imports
import Home from './pages/home/Home';
import Recipes from './pages/recipes/Recipes';

// config imports
import theme from './config/theme';


export default function App() {

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = "https://fonts.googleapis.com";
    document.head.appendChild(link);

    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap";
    document.head.appendChild(link2);

    document.body.style.margin = "0";
    document.body.style.background = theme.colors.bg;

    document.body.style.color = "#fff";
    document.body.style.overflowX = "hidden";
  }, []);

  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
    </Routes>

  );
}
