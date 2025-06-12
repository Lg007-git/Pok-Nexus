import React, { useState } from "react";
import "../cardcomponent.css"; 

const CardComponent = ({ image, color1, color2 }) => {
  const [style, setStyle] = useState({});
  const [animated, setAnimated] = useState(false);

  const handleMouseMove = (e) => {
    const card12 = e.currentTarget;
    const cardRect = card12.getBoundingClientRect();
    const l = e.clientX - cardRect.left;
    const t = e.clientY - cardRect.top;
    const h = cardRect.height;
    const w = cardRect.width;
    const px = Math.abs(Math.floor((100 / w) * l) - 100);
    const py = Math.abs(Math.floor((100 / h) * t) - 100);
    const pa = 50 - px + (50 - py);

    const lp = 50 + (px - 50) / 1.5;
    const tp = 50 + (py - 50) / 1.5;
    const pxSpark = 50 + (px - 50) / 7;
    const pySpark = 50 + (py - 50) / 7;
    const pOpc = 20 + Math.abs(pa) * 1.5;
    const ty = ((tp - 50) / 2) * -1;
    const tx = ((lp - 50) / 1.5) * 0.5;

    setStyle({
      transform: `rotateX(${ty}deg) rotateY(${tx}deg)`,
      "--gradientPos": `${lp}% ${tp}%`,
      "--sparkPos": `${pxSpark}% ${pySpark}%`,
      "--opacity": `${pOpc / 100}`,
    });
    setAnimated(false);
  };

  const handleMouseLeave = () => {
    setStyle({});
    setAnimated(true);
  };

  return (
    <div
      className={`card12 ${animated ? "animated" : ""}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt="card" />
    </div>
  );
};

export default CardComponent;
