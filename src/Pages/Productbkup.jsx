import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../data/products"; // Import the product data

const Product = () => {
  const { productId } = useParams(); // Get the productId from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product based on productId
    const foundProduct = allProducts.find(
      (prod) => prod.id === parseInt(productId)
    );
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}.00</p>
      <p>Discounted Price: ${product.discountedPrice}.00</p>
      <p>
        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
