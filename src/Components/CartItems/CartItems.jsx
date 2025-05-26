import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../assets/remove.webp";

const CartItems = () => {
  const { all_product, cartItems, removeFromcart, addTocart, deleteFromcart } =
    useContext(ShopContext);

  const navigate = useNavigate();

  const totalAmount = all_product.reduce((acc, item) => {
    const quantity = cartItems[item.id] || 0;
    return acc + quantity * item.discountedPrice;
  }, 0);

  const handleProceedToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cartItems">
      <div className="widthfull">
        <section className="img-section">
          <div className="hero-content">
            <h1 className="hero-cont">Shopping Cart</h1>
          </div>
        </section>
      </div>
      <div className="mainsection">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {all_product.map((e) => {
          const quantity = cartItems[e.id] || 0;
          if (quantity > 0) {
            return (
              <div key={e.id}>
                <div className="cartitems-format">
                  <img
                    src={e.images[0]}
                    alt={e.title}
                    className="carticon-product-icon"
                  />
                  <p>{e.title}</p>
                  <p>
                    <small className="small">$</small>
                    {e.discountedPrice}
                  </p>
                  <div className="quantity-cart">
                    <div className="spinner">
                      <input type="number" value={quantity} readOnly />
                      <div className="spinner-buttons">
                        <button onClick={() => addTocart(e.id)}>
                          <i className="fa fa-caret-up"></i>
                        </button>
                        <button onClick={() => removeFromcart(e.id)}>
                          <i className="fa fa-caret-down"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <p>
                    <small className="small">$</small>
                    {e.discountedPrice * quantity}
                  </p>
                  <img
                    src={remove_icon}
                    alt="Remove"
                    height="20px"
                    onClick={() => deleteFromcart(e.id)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="bottom">
        <div className="cart-summary">
          <div className="cart-discount">
            <h3>Discount Code</h3>
            <div className="underline"></div>
            <div className="discount-box">
              <input
                type="text"
                placeholder="ENTER YOUR CODE IF YOU HAVE ONE"
              />
              <button>APPLY CODE</button>
            </div>
            <div className="discount-actions">
              <button className="light-btn">CONTINUE SHOPPING</button>
              <button className="light-btn">UPDATE CART</button>
            </div>
          </div>

          <div className="cart-total">
            <h3>Grand Total</h3>
            <div className="underline"></div>
            <div className="total-details">
              {all_product.map((e) => {
                const quantity = cartItems[e.id] || 0;
                if (quantity > 0) {
                  return (
                    <div className="item-line" key={e.id}>
                      <span>{e.title}</span>
                      <span>${e.discountedPrice * quantity}</span>
                    </div>
                  );
                }
                return null;
              })}
              <div className="item-line total-cost">
                <strong>TOTAL COST</strong>
                <strong>${totalAmount}</strong>
              </div>
            </div>
            <button className="checkout-btn3" onClick={handleProceedToCheckout}>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
