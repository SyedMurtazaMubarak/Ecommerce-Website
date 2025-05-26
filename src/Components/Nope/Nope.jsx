import React from "react";
import "./BoShop.css";
import b4 from "../../assets/b4.jpg";
import b1 from "../../assets/b1.jpg";
import b2 from "../../assets/b2.jpg";
import b3 from "../../assets/b3.jpg";
import sewingmachine from "../../assets/sewingmachine.png";
import shirt from "../../assets/shirt.png";
import need from "../../assets/need.png";
import card from "../../assets/card.png";
import support from "../../assets/support.png";
import box from "../../assets/box.png";
import shipped from "../../assets/shipped.png";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="sq">
        <div className="sq-left">
          <img src={b4} alt="Thread shelf" />
        </div>
        <div className="sq-right">
          <h2>A Brief History of the BoShop</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nibh dolor, efficitur eget pharetra ac, cursus sed sapien. Cras
            posuere ligula ut blandit varius. Nunc consectetur scelerisque
            felis, et volutpat massa aliquam in. Consectetur adipiscing elit.
            Maecenas nibh dolor, efficitur eget pharetra ac, cursus sed sapien
          </p>
          <h4>--1950--1999</h4>
          <p>
            Lorem ipsum dolor sit amet, efficitur eget pharetra ac, cursus sed
            sapien. Cras posuere ligula ut blandit varius. Nunc consectetur
            scelerisque felis. consectetur adipiscing elit. Maecenas nibh dolor
          </p>
          <h4>2000--2018</h4>
          <p>
            Lorem ipsum dolor sit amet, efficitur eget pharetra ac, cursus sed
            sapien. Cras posuere ligula ut blandit varius. Nunc consectetur
            scelerisque felis. consectetur adipiscing elit. Maecenas nibh dolor
          </p>
        </div>
      </section>

      {/* <!-- Customize Section --> */}
      <section className="customize">
        <div className="customize-left">
          <h3>Fully Customizability Options Look Beautiful in 2018</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nibh dolor, efficitur eget pharetra ac, cursus sed sapien. Cras
            posuere ligula ut blandit varius.
          </p>
          <div className="customize-features">
            <div>
              <img src={sewingmachine} alt="" />
              <br />
              Fully Customizability
            </div>
            <div>
              <img src={need} alt="" />
              <br />
              Fully Hand Made
            </div>
            <div>
              <img src={shirt} alt="" />
              <br />
              Elegant Looks
            </div>
          </div>
          <div>
            <button className="btn">ORDER NOW</button>
          </div>
        </div>
        <div className="customize-right">
          <img src={b3} alt="Shirts" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="service">
          <div>
            <img src={sewingmachine} alt="" />
            <br />
            Free Shipment Over 50$
          </div>
        </div>
        <div className="service">
          <div>
            <img src={support} alt="" />
            <br />
            24/7 online Support
          </div>
        </div>
        <div className="service">
          <div>
            <img src={card} alt="" />
            <br />
            100% Secure Payment
          </div>
        </div>
        <div className="service">
          <div>
            <img src={box} alt="" />
            <br />
            World Wide Shipment
          </div>
        </div>
      </section>

      <div class="blog-section">
        <div class="blog-card">
          <img src={b1} alt="Sunglasses" />
          <div class="blog-content">
            <div class="blog-meta">
              <span class="date">
                <strong>10</strong> January
              </span>
              <span>
                By: <strong>Admin</strong>
              </span>
              <span>
                Comments: <strong>32</strong>
              </span>
            </div>
            <h3>Donec commo is vulputate</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              faucibus maximus vehicula. tellus vel tristique posuere,
              <a href="#">Read more</a>
            </p>
          </div>
        </div>

        <div class="blog-card">
          <img src={b3} alt="Clothes" />
          <div class="blog-content">
            <div class="blog-meta">
              <span class="date">
                <strong>25</strong> February
              </span>
              <span>
                By: <strong>Admin</strong>
              </span>
              <span>
                Comments: <strong>32</strong>
              </span>
            </div>
            <h3>Donec commo is vulputate</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              faucibus maximus. Sed feugiat, tellus vel tristique posuere,
              <a href="#">Read more</a>
            </p>
          </div>
        </div>

        <div class="blog-card">
          <img src={b2} alt="Thread spools" />
          <div class="blog-content">
            <div class="blog-meta">
              <span class="date">
                <strong>25</strong> February
              </span>
              <span>
                By: <strong>Admin</strong>
              </span>
              <span>
                Comments: <strong>32</strong>
              </span>
            </div>
            <h3>Donec commo is vulputate</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              faucibus maximus vehicula. Sed feugiat, tellus vel tristique
              posuere,<a href="#">Read more</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
