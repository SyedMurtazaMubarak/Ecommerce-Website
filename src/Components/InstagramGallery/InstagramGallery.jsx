import React from "react";
import "./InstagramGallery.css";
import insta1 from "../../assets/insta1.jpg";
import insta2 from "../../assets/insta2.jpg";
import insta3 from "../../assets/insta3.jpg";
import insta4 from "../../assets/insta4.jpg";
import insta5 from "../../assets/insta5.jpg";
import insta6 from "../../assets/insta6.jpg";

const InstagramGallery = () => {
  const images = [insta1, insta2, insta3, insta4, insta5, insta6];

  return (
    <div className="insta-gallery">
      <div className="insta-overlay-text">
        <h3>From The @Instagram</h3>
      </div>
      <ul className="insta-list">
        <li>
          <img src={insta1} alt="insta1" />
        </li>
        <li>
          <img src={insta2} alt="insta2" />
        </li>
        <li>
          <img src={insta3} alt="insta3" />
        </li>
        <li>
          <img src={insta4} alt="insta4" />
        </li>
        <li>
          <img src={insta5} alt="insta5" />
        </li>
        <li>
          <img src={insta6} alt="insta6" />
        </li>
      </ul>
    </div>
  );
};

export default InstagramGallery;
