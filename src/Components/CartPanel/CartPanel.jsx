import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "../CartPanel/CartPanel.css";

const CartPanel = ({ onClose }) => {
  const navigate = useNavigate();
  const { cartItems, all_product } = useContext(ShopContext);

  const getCartTotal = () => {
    return Object.keys(cartItems)
      .filter((id) => cartItems[id] > 0)
      .reduce((total, id) => {
        const product = all_product.find((p) => p.id === parseInt(id));
        if (!product || typeof product.price !== "number") return total;
        return total + cartItems[id] * product.price;
      }, 0);
  };

  // Check if all cart items have zero quantity
  const isCartEmpty = Object.values(cartItems).every((qty) => qty === 0);

  return (
    <div className="cart-panel">
      <div className="cart-header">
        <h3>Shopping Cart</h3>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>

      <div className="cart-items">
        {isCartEmpty && <p>Your cart is empty.</p>}
        {Object.keys(cartItems)
          .filter((id) => cartItems[id] > 0)
          .map((id) => {
            const product = all_product.find((p) => p.id === parseInt(id));
            return (
              product && (
                <div className="cart-item" key={id}>
                  <img src={product.images[0]} alt={product.title} />
                  <div className="item-info">
                    <p>{product.title}</p>
                    <p>{product.price.toFixed(2)} USD</p>
                    <p>QTY: {cartItems[id]}</p>
                  </div>
                </div>
              )
            );
          })}
      </div>

      {!isCartEmpty && (
        <div className="cart-footer">
          <div className="subtotal">
            SUBTOTAL: {getCartTotal().toFixed(2)} USD
          </div>
          <button
            className="view-btn"
            onClick={() => {
              navigate("/cart");
              onClose();
            }}
          >
            VIEW CART
          </button>
          <button
            className="checkout-btn2"
            onClick={() => {
              navigate("/checkout");
              onClose();
            }}
          >
            CHECK OUT
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPanel;
