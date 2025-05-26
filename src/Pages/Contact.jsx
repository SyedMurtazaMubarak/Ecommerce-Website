import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import NewsletterSection from "../Components/NewsLetter/NewsLetter";
import InstagramGallery from "../Components/InstagramGallery/InstagramGallery";

const Contact = () => {
  return (
    <>
      <div className="cartItems">
        <div className="widthfull">
          <section className="img-section">
            <div className="hero-content">
              <h1 className="hero-cont">Contact Us</h1> {/* Updated title */}
            </div>
          </section>
        </div>
      </div>

      <div className="contact-wrapper">
        <div className="contact-container">
          {/* Left: Contact Form */}
          <div className="contact-form-section">
            <h2 className="section-title">Keep in Touch With Us</h2>
            <form className="contact-form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input id="name" type="text" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input id="email" type="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input id="phone" type="text" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" />
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="6" required></textarea>
              </div>
              <div className="form-group full-width">
                <button type="submit" className="send-btn">
                  Send Mail
                </button>
              </div>
            </form>
          </div>

          {/* Right: Address Info */}
          <div className="contact-info-section">
            <h3 className="info-title">Our Address</h3>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <p>
                Street No. 12, Newyork 12,
                <br />
                MD - 123, USA.
              </p>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <p>1.800.123.456789</p>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <p>info@ecoshop.com</p>
            </div>
            <p className="info-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              erat turpis, pellentesque non leo eget.
            </p>
          </div>
        </div>

        <div className="newsletter-wrapper">
          <NewsletterSection />
        </div>

        <div className="instagram-wrapper">
          <InstagramGallery />
        </div>
      </div>
    </>
  );
};

export default Contact;
