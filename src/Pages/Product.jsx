import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import "../Pages/Product.css";
import "../assets/all_product";
import "../assets/data";

const Product = () => {
  const { all_product, addTocart } = useContext(ShopContext);

  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const product = all_product.find((p) => p.id === Number(productId));
  const thumbnails = product.images || [];

  if (!product) return <p>Product not found.</p>;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % thumbnails.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? thumbnails.length - 1 : prev - 1
    );
  };

  return (
    <div className="product-container">
      <div className="product-left">
        <div className="main-image">
          <img src={thumbnails[activeImageIndex]} alt="Main" />
        </div>

        <div className="thumbnail-gallery">
          <button className="arrow left" onClick={prevImage}>
            &larr;
          </button>
          <div className="thumbnails">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`thumb${index}`}
                className={index === activeImageIndex ? "active" : ""}
                onClick={() => setActiveImageIndex(index)}
              />
            ))}
          </div>
          <button className="arrow right" onClick={nextImage}>
            &rarr;
          </button>
        </div>
      </div>

      <div className="product-right">
        <h2 className="product-title">{product.title}</h2>
        <hr className="product-hr" />
        <div className="rating-stars">⭐⭐⭐⭐☆</div>
        <div className="product-price">
          <span className="currency">$</span>
          {product.price}
        </div>

        <hr className="divider" />

        <div className="brand-category">
          <span>
            Brand: <strong>Top Shop</strong>
          </span>
          <span>
            Category: <strong>women</strong>
          </span>
        </div>

        <hr className="divider" />

        <p className="product-description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout...
        </p>

        <div className="quantity-cart">
          <div className="quantity-control">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button
            className="add-to-cart1"
            onClick={() => addTocart(product.id, quantity)}
          >
            ADD TO CART
          </button>
        </div>

        <div className="wishlist">♡ ADD TO WISHLIST</div>

        <div className="share">
          <p>Share this item with your friends</p>
          <div className="social-icons2">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest-p"></i>
            <i className="fa-brands fa-dribbble"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
