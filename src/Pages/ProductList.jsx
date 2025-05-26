import React, { useContext } from "react";
import { ShopContext } from "../../src/assets/Context/ShopContext";

const ProductList = () => {
  const { products, addToCart } = useContext(ShopContext);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: 20 }}>
          <h4>{product.title}</h4>
          <p>{product.price.toFixed(2)} USD</p>
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
