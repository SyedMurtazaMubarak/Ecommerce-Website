import React, { useState } from "react";
import "./NewsLetter.css";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      console.log("Subscribed with email:", email);
      // Here you can send the email to your backend or email API
    }
  };

  return (
    <div className="newscontainer">
      <div className="newsletter-section">
        <div className="newsletter-left">
          <p className="newsletter-text">
            We always stay with our clients and respect their business. We
            deliver 100% and provide instant response to help them succeed in
            constantly changing and challenging business world.
          </p>
          <div className="social-icons1">
            <i className="icon-social-facebook"></i>
            <i className="icon-social-twitter"></i>
            <i className="icon-social-tumblr"></i>
            <i className="icon-social-youtube"></i>
            <i className="icon-social-dribbble"></i>
          </div>
        </div>

        <div className="newsletter-right">
          <h2>Subscribe Our Newsletter</h2>
          <p className="sub-text">
            <em>
              Phasellus lacinia fermentum bibendum. Interdum et malesuada fames
              ac.
            </em>
          </p>

          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="butn" type="submit">
              Subscribe
            </button>
          </form>

          {submitted && (
            <p className="success-message">Thanks for subscribing!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
