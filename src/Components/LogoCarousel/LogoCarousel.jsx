import React, { useState } from "react";
import "./LogoCarousel.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";
import logo8 from "../../assets/logo8.png";
import logo9 from "../../assets/logo9.png";
import logo10 from "../../assets/logo10.png";
import logo11 from "../../assets/logo11.png";
import logo12 from "../../assets/logo12.png";
import logo13 from "../../assets/logo13.png";
import logo14 from "../../assets/logo14.png";
import logo15 from "../../assets/logo15.png";
import logo16 from "../../assets/logo16.png";

const allLogos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
];

const LogosPerPage = 8;

const LogoCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(allLogos.length / LogosPerPage);

  const handleDotClick = (index) => {
    setCurrentPage(index);
  };

  const start = currentPage * LogosPerPage;
  const visibleLogos = allLogos.slice(start, start + LogosPerPage);

  return (
    <div className="carousel-container">
      <div className="logo-row">
        {visibleLogos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
      </div>
      <div className="dots">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`dot ${i === currentPage ? "active" : ""}`}
            onClick={() => handleDotClick(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
