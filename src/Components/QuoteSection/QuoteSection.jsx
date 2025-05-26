import React, { useState, useEffect, useRef } from "react";
import "./QuoteSection.css";
import { FaQuoteLeft } from "react-icons/fa";

const quotes = [
  {
    text: "Phasellus lacinia fermentum bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ullamcorper sapien lacus, eu luctus non. Nulla lacinia, eros vel fermentum consectetur.",
    author: "John Smith",
    role: "Themeforest",
  },
  {
    text: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
    author: "Emily Davis",
    role: "Envato",
  },
  {
    text: "Sed porttitor lectus nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat.",
    author: "Michael Lee",
    role: "CodeCanyon",
  },
];

const QuoteSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0); // To track where the drag starts
  const dragDistance = useRef(0); // To track how far the mouse has moved
  const containerRef = useRef(null); // Reference to the container for dragging

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle mouse down event
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX; // Store the initial mouse position
  };

  // Handle mouse move event
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    dragDistance.current = e.clientX - startX.current; // Calculate the drag distance
    if (Math.abs(dragDistance.current) > 100) {
      // Trigger movement after a 100px drag
      const direction = dragDistance.current > 0 ? -1 : 1;
      setCurrentIndex(
        (prevIndex) => (prevIndex + direction + quotes.length) % quotes.length
      );
      startX.current = e.clientX; // Reset the start position for continuous dragging
    }
  };

  // Handle mouse up event
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="quote-container"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Ensure dragging stops if mouse leaves
    >
      <div className="quote-icon">
        <FaQuoteLeft />
        <div className="underline"></div>
      </div>
      <p className="quote-text">"{quotes[currentIndex].text}"</p>
      <h4 className="quote-author">{quotes[currentIndex].author}</h4>
      <p className="quote-role">{quotes[currentIndex].role}</p>
      <div className="quote-pagination">
        {quotes.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default QuoteSection;
