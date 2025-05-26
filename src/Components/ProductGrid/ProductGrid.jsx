import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductGrid.css";
import item1 from "../../assets/item1.jpg";
import item2 from "../../assets/item2.jpg";
import item3 from "../../assets/item3.jpg";
import item4 from "../../assets/item4.jpg";
import p2_img from "../../assets/item-img-1-1.jpg";
import p3_img from "../../assets/item-img-1-1-1.jpg";
import p4 from "../../assets/item-img-1-2.jpg";
import p5 from "../../assets/item-img-1-2-1.jpg";
import p6 from "../../assets/item-img-1-3.jpg";
import p7 from "../../assets/item-img-1-3-1.jpg";
import p8 from "../../assets/item-img-1-4.jpg";
import p9 from "../../assets/item-img-1-4-1.jpg";
import a1 from "../../assets/item-img-1-5.jpg";
import a2 from "../../assets/item-img-1-5-1.jpg";
import a3 from "../../assets/item-img-1-6.jpg";
import a4 from "../../assets/item-img-1-6-1.jpg";
import a5 from "../../assets/item-img-1-7.jpg";
import a6 from "../../assets/item-img-1-7-1.jpg";
import a7 from "../../assets/item2.jpg";
import a8 from "../../assets/item3.jpg";
import b1 from "../../assets/item4.jpg";
import b2 from "../../assets/item1.jpg";
import b3 from "../../assets/item-img-1-10.jpg";
import b4 from "../../assets/item-img-1-10-1.jpg";
import eyeicon from "../../assets/eyeicon.png";

const allProducts = [
  {
    id: 1,
    title: "The Child Special T-Shirts",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Best Selling",
    price: 299,
    discountedPrice: 199,
    images: [p2_img, p3_img], // ------image
  },

  {
    id: 2,
    title: "Ladies Sandle Clean",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Best Selling",
    price: 299,
    discountedPrice: 199,
    images: [p4, p5], // ------image
  },
  {
    id: 3,
    title: "Lather Bags Inside and outside",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Best Selling",
    price: 299,
    discountedPrice: 199,
    images: [p6, p7], // ------image
  },
  {
    id: 4,
    title: "Neck Skaff Full",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Best Selling",
    price: 299,
    discountedPrice: 199,
    images: [p8, p9], // ------image
  },
  {
    id: 5,
    title: "Men's Fashion Winter Blue",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Best Selling",
    price: 299,
    discountedPrice: 199,
    images: [a1, a2], // ------image
  },
  {
    id: 6,
    title: "Angry T-Shirts White",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Best Selling",
    price: 299,
    discountedPrice: 199,
    images: [a3, a4], // ------image
  },
  {
    id: 7,
    title: "Angry T-shites",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Best Selling",
    price: 299,
    discountedPrice: 199,
    images: [a5, a6], // ------image
  },
  {
    id: 8,
    title: "Child Dressing Shorts Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Best Selling",
    price: 299,
    discountedPrice: 199,
    images: [a7, a8], // ------image
  },
  {
    id: 9,
    title: "The Best Hand Back Small",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Best Selling",
    price: 299,
    discountedPrice: 199,
    images: [b1, b2], // ------image
  },
  {
    id: 10,
    title: "Child White Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Best Selling",
    price: 299,
    discountedPrice: 199,
    images: [b3, b4], // ------image
  },
  {
    id: 11,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Hand Made Items",
    price: 299,
    discountedPrice: 199,
    images: [a1, a2], // ------image
  },
  {
    id: 12,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Hand Made Items",
    price: 299,
    discountedPrice: 199,
    images: [p8, p9], // ------image
  },
  {
    id: 13,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Hand Made Items",
    price: 299,
    discountedPrice: 199,
    images: [p6, p7], // ------image
  },
  {
    id: 14,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Hand Made Items",
    price: 299,
    discountedPrice: 199,
    images: [p4, p5], // ------image
  },
  {
    id: 15,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Hand Made Items",
    price: 299,
    discountedPrice: 199,
    images: [p2_img, p3_img], // ------image
  },
  {
    id: 16,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Hand Made Items",
    price: 299,
    discountedPrice: 199,
    images: [b3, b4], // ------image
  },
  {
    id: 17,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Hand Made Items",
    price: 299,
    discountedPrice: 199,
    images: [b1, b2], // ------image
  },
  {
    id: 18,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Hand Made Items",
    price: 299,
    discountedPrice: 199,
    images: [a7, a8], // ------image
  },
  {
    id: 19,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Hand Made Items",
    price: 299,
    discountedPrice: 199,
    images: [a5, a6], // ------image
  },
  {
    id: 20,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Hand Made Items",
    price: 299,
    discountedPrice: 199,
    images: [a3, a4], // ------image
  },
  {
    id: 21,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Top 10 Items",
    price: 299,
    discountedPrice: 199,
    images: [b3, b4], // ------image
  },
  {
    id: 22,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Top 10 Items",
    price: 299,
    discountedPrice: 199,
    images: [b1, b2], // ------image
  },
  {
    id: 23,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Top 10 Items",
    price: 299,
    discountedPrice: 199,
    images: [a7, a8], // ------image
  },
  {
    id: 24,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Top 10 Items",
    price: 299,
    discountedPrice: 199,
    images: [a5, a6], // ------image
  },
  {
    id: 25,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Top 10 Items",
    price: 299,
    discountedPrice: 199,
    images: [a3, a4], // ------image
  },
  {
    id: 26,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Top 10 Items",
    price: 299,
    discountedPrice: 199,
    images: [a1, a2], // ------image
  },
  {
    id: 27,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Top 10 Items",
    price: 299,
    discountedPrice: 199,
    images: [p8, p9], // ------image
  },
  {
    id: 28,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Top 10 Items",
    price: 299,
    discountedPrice: 199,
    images: [p6, p7], // ------image
  },
  {
    id: 29,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Top 10 Items",
    price: 299,
    discountedPrice: 199,
    images: [p4, p5], // ------image
  },
  {
    id: 30,
    title: "Mid Rise Skinny Jeans",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed.",
    category: "Top 10 Items",
    price: 299,
    discountedPrice: 199,
    images: [p2_img, p3_img], // ------image
  },
];

const categories = ["Best Selling", "Hand Made Items", "Top 10 Items"];

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("Best Selling");
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const navigate = useNavigate();

  const filteredProducts = allProducts.filter(
    (product) => product.category === selectedCategory
  );

  const handleMouseEnter = (id) => setHoveredProductId(id);
  const handleMouseLeave = () => setHoveredProductId(null);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Navigate to the product page
  };

  return (
    <div className="productgrid">
      <div className="top">
        <h2>Best Collection Arrived</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          faucibus maximus vehicula.
        </p>
      </div>
      <div className="product-section">
        <div className="product-tabs">
          {categories.map((cat) => (
            <span
              key={cat}
              className={cat === selectedCategory ? "highlight-tab" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              onMouseEnter={() => handleMouseEnter(product.id)} // 👈 ADD THIS
              onMouseLeave={handleMouseLeave} // 👈 AND THIS
              style={{ cursor: "pointer" }}
            >
              <img
                src={
                  hoveredProductId === product.id && product.images[1]
                    ? product.images[1]
                    : product.images[0]
                }
                alt={product.title}
              />
              <div className="overlay">
                <div className="icon">
                  {/* <span>👁️</span> */}
                  <span>
                    <img className="eyebutton" src={eyeicon} alt="eyeicon" />
                  </span>
                </div>
                <button className="add-to-cart">Add to Cart</button>
              </div>
              <h4>{product.title}</h4>
              <p>
                <span className="original-price">${product.price}.00</span>{" "}
                <span className="discounted-price">
                  ${product.discountedPrice}.00
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
