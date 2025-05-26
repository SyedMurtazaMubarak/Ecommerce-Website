import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import cardicons from "../../assets/cardicons.png";
import { Link } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2 className="logo">
            <span className="yellow">BO</span>SHOP
          </h2>
          <p>
            <FaMapMarkerAlt className="icon5" />
            Street No. 12, Newyork 12, MD - 123, USA.
          </p>
          <p>
            <FaPhoneAlt className="icon5" />
            1.800.123.456789 <br />
            1.800.123.456789
          </p>

          <p>
            <FaEnvelope className="icon5" />
            info@BoShop.com <br />
            contact@BoShop.com
          </p>
        </div>

        <div className="footer-column">
          <h4>Links</h4>
          <ul>
            <li>Products</li>
            <li>Features</li>
            <li>Blog</li>
            <li>Products</li>
            <li>Features</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-column">
          <ul>
            <li>Find a Store</li>
            <li>Privacy Policy</li>
            <li>Press Kit</li>
            <li>Find a Store</li>
            <li>Privacy Policy</li>
            <li>Press Kit</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Account Info</h4>
          <ul>
            <li>Products</li>
            <li>Find a Store</li>
            <li className="highlight">Features</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
            <li>Press Kit</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            © 2018 BoShop All right reserved.
            <span className="highlight">murtaza</span>
          </p>
          <div className="payment-icons">
            <img src={cardicons} alt="Discover" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
