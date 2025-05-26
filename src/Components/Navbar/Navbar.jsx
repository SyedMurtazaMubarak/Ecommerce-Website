import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import CartPanel from "../CartPanel/CartPanel"; // Make sure the path is correct

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setIsLoggedIn(loggedIn);
      setUserName(storedUser?.name || "");
    };

    checkLoginStatus();

    window.addEventListener("storage", checkLoginStatus);
    const interval = setInterval(checkLoginStatus, 1000);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName("");
    navigate("/LoginSignup");
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <ul className="nav-menu">
          <li onClick={() => setMenu("home")}>
            <Link to="/" style={{ textDecoration: "none", color: "#2d3a4b" }}>
              Home
            </Link>
            {menu === "home" && <hr />}
          </li>
          {/* <li onClick={() => setMenu("pages")}>
            <Link
              to="/pages"
              style={{ textDecoration: "none", color: "#2d3a4b" }}
            >
              Pages
            </Link>
            {menu === "pages" && <hr />}
          </li>
          <li onClick={() => setMenu("about")}>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "#2d3a4b" }}
            >
              About
            </Link>
            {menu === "about" && <hr />}
          </li> */}
          <li onClick={() => setMenu("collection")}>
            <Link
              to="/collection"
              style={{ textDecoration: "none", color: "#2d3a4b" }}
            >
              Collection
            </Link>
            {menu === "collection" && <hr />}
          </li>
          <li onClick={() => setMenu("megastore")}>
            <Link
              to="/megastore"
              style={{ textDecoration: "none", color: "#2d3a4b" }}
            >
              Megastore
            </Link>
            {menu === "megastore" && <hr />}
          </li>
          <li onClick={() => setMenu("contact")}>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "#2d3a4b" }}
            >
              Contact
            </Link>
            {menu === "contact" && <hr />}
          </li>
        </ul>

        <div className="nav-login-cart">
          {isLoggedIn && (
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          )}

          {!isLoggedIn && (
            <Link to="/LoginSignup">
              <div className="svg-wrapper">
                <svg
                  className="userbtn"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="31"
                  height="31"
                >
                  <circle
                    cx="12"
                    cy="7.25"
                    r="5.73"
                    stroke="#000"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13a10.3,10.3,0,0,1,10.13,8.45l.37,2.05"
                    stroke="#000"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div>
            </Link>
          )}

          {/* Cart Button */}
          <li onClick={() => setIsCartOpen(true)}>
            <div className="svg-wrapper" style={{ cursor: "pointer" }}>
              <svg
                className="userbtn"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
              >
                <path
                  d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19"
                  stroke="#1C274C"
                  strokeWidth="1"
                  strokeLinecap="round"
                ></path>
                <path
                  opacity="0.5"
                  d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                  stroke="#1C274C"
                  strokeWidth="1"
                ></path>
                <path
                  opacity="0.5"
                  d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                  stroke="#1C274C"
                  strokeWidth="1"
                ></path>
                <path
                  d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5"
                  stroke="#1C274C"
                  strokeWidth="1"
                ></path>
              </svg>
              <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
          </li>

          {/* Search Button */}
          <li>
            <a href="#">
              <div className="svg-wrapper">
                <svg
                  className="userbtn"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                >
                  <path
                    d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="#000000"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </a>
          </li>
        </div>
      </div>

      {/* Slide-in Cart Panel */}
      {isCartOpen && <CartPanel onClose={() => setIsCartOpen(false)} />}
    </>
  );
};

export default Navbar;
