import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  Navigate,
} from "react-router-dom";
import "./ProductPage.css"; // import external CSS

// Sample product data array
const products = [
  {
    id: "1",
    name: "Stylish Sneakers",
    price: "$69.99",
    description:
      "This is dummy copy. It is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed. These words are here to provide the reader with a basic impression of how actual text will appear in its final presentation.",
    imageUrl: "https://via.placeholder.com/400x300?text=Stylish+Sneakers",
    features: ["Lightweight", "Breathable material", "Flexible sole"],
  },
  {
    id: "2",
    name: "Classic Watch",
    price: "$129.99",
    description: "Elegant classic watch with leather strap.",
    imageUrl: "https://via.placeholder.com/400x300?text=Classic+Watch",
    features: ["Water resistant", "Leather strap", "2-year warranty"],
  },
  {
    id: "3",
    name: "Wireless Headphones",
    price: "$99.99",
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: "https://via.placeholder.com/400x300?text=Wireless+Headphones",
    features: ["Bluetooth 5.0", "Long battery life", "Comfort-fit design"],
  },
];

// ProductPage component fetches product by ID and displays details
function ProductPage() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    // Redirect to home if product not found
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container">
      <Link to="/" className="back-link">
        &larr; Back to products
      </Link>
      <div className="product-card">
        <img src={product.imageUrl} alt={product.name} className="image" />
        <div className="details">
          <h1 className="name">{product.name}</h1>
          <p className="price">{product.price}</p>
          <p className="description">{product.description}</p>
          <ul className="features-list">
            {product.features.map((feat, idx) => (
              <li key={idx} className="feature-item">
                ✓ {feat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Home page listing all products with links to their pages
function Home() {
  return (
    <div className="container">
      <h1 className="page-title">Our Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="product-link"
          >
            <div className="product-preview">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="preview-image"
              />
              <h2 className="preview-name">{product.name}</h2>
              <p className="preview-price">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ProductPageApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}
