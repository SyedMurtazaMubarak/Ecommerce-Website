import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "../../Pages/Checkout/CheckoutPage.css";

const CheckoutPage = () => {
  const { cartItems, all_product } = useContext(ShopContext);
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    city: "",
    country: "",
    email: "",
    phone: "",
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const calculateTotal = () => {
    return all_product.reduce((acc, item) => {
      const quantity = cartItems[item.id] || 0;
      return acc + quantity * item.discountedPrice;
    }, 0);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Check required fields
    const { firstName, lastName, address, city, country, email, phone } =
      billingInfo;

    if (
      !firstName ||
      !lastName ||
      !address ||
      !city ||
      !country ||
      !email ||
      !phone
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!acceptedTerms) {
      setError("You must accept the terms and conditions.");
      return;
    }

    setError("");
    alert("Order placed successfully!");
  };

  return (
    <div className="checkout-wrapper">
      <h2 className="checkout-title">Checkout</h2>
      <form className="checkout-grid" onSubmit={handlePlaceOrder}>
        <div className="checkout-left">
          <h3>Billing Details</h3>
          <div className="lines">
            <hr className="line" />
            <hr className="line1" />
          </div>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="firstName">*First Name</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={billingInfo.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">*Last Name</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={billingInfo.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="company">Company Name (Optional)</label>
              <input
                id="company"
                type="text"
                name="company"
                value={billingInfo.company}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="address">*Street Address</label>
              <input
                id="address"
                type="text"
                name="address"
                value={billingInfo.address}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="city">*City</label>
              <input
                id="city"
                type="text"
                name="city"
                value={billingInfo.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="country">*Country</label>
              <input
                id="country"
                type="text"
                name="country"
                value={billingInfo.country}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="email">*Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={billingInfo.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">*Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={billingInfo.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="continue-ship-row">
            <button className="con">Continue</button>
            <label className="ship-checkbox">
              <input type="checkbox" />
              Ship to a different address
            </label>
          </div>

          <h3>Shipping information</h3>
          <div className="lines">
            <hr className="line" />
            <hr className="line1" />
          </div>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="shippingFirstName">*First Name</label>
              <input
                id="shippingFirstName"
                type="text"
                name="firstName"
                value={billingInfo.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="shippingLastName">*Last Name</label>
              <input
                id="shippingLastName"
                type="text"
                name="lastName"
                value={billingInfo.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="shippingCompany">Company Name (Optional)</label>
              <input
                id="shippingCompany"
                type="text"
                name="company"
                value={billingInfo.company}
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="shippingAddress">*Street Address</label>
              <input
                id="shippingAddress"
                type="text"
                name="address"
                value={billingInfo.address}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="shippingCity">*City</label>
              <input
                id="shippingCity"
                type="text"
                name="city"
                value={billingInfo.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="shippingCountry">*Country</label>
              <input
                id="shippingCountry"
                type="text"
                name="country"
                value={billingInfo.country}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="shippingEmail">*Email Address</label>
              <input
                id="shippingEmail"
                type="email"
                name="email"
                value={billingInfo.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="shippingPhone">*Phone Number</label>
              <input
                id="shippingPhone"
                type="tel"
                name="phone"
                value={billingInfo.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <button className="con" type="submit">
            SUBMIT
          </button>
        </div>

        <div className="checkout-right">
          <div className="right-check">
            <h3>Your Order</h3>
            <div className="order-summary-box">
              {all_product.map((item) => {
                const quantity = cartItems[item.id] || 0;
                if (quantity > 0) {
                  return (
                    <div key={item.id} className="order-item">
                      <span>
                        {item.title} × {quantity}
                      </span>
                      <span>
                        ${(item.discountedPrice * quantity).toFixed(2)}
                      </span>
                    </div>
                  );
                }
                return null;
              })}
              <div className="order-total">
                <strong>Total:</strong>
                <strong>${calculateTotal().toFixed(2)}</strong>
              </div>
            </div>

            <h3>Payment Methods</h3>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  defaultChecked
                />{" "}
                Direct Bank Transfer
              </label>
              <label>
                <input type="radio" name="payment" value="cod" /> Cash on
                Delivery
              </label>
              <label>
                <input type="radio" name="payment" value="cheque" /> Cheque
                Payment
              </label>
              <label>
                <input type="radio" name="payment" value="paypal" /> PayPal
              </label>
            </div>

            <label className="terms">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
              />{" "}
              I’ve read and accept the terms & conditions*
            </label>

            {error && <p className="form-error">{error}</p>}
            <div>
              <button type="submit" className="placeorder-btn">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
