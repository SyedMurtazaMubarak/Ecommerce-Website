import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (isLogin) {
      // LOGIN MODE
      if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
      ) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("user", JSON.stringify(storedUser));
        alert("Login successful!");
        navigate("/");
      } else {
        alert("Invalid email or password!");
      }
    } else {
      // REGISTER MODE
      const newUser = { email, password };
      localStorage.setItem("user", JSON.stringify(newUser));
      alert("Account created successfully. Please log in.");
      setIsLogin(true); // Switch to login mode
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login-signup-container">
      <div className="toggle-login-signup">
        <span
          className={isLogin ? "active" : ""}
          onClick={() => setIsLogin(true)}
        >
          Login
        </span>
        <span>/</span>
        <span
          className={!isLogin ? "active" : ""}
          onClick={() => setIsLogin(false)}
        >
          Register
        </span>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <label>{isLogin ? "Username Or Email Address" : "Email Address"}</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {isLogin && <div className="forgot-password">Forget Password</div>}

        <button type="submit">{isLogin ? "LOGIN" : "REGISTER"}</button>
      </form>

      <div className="social-login">
        LOGIN WITH SOCIAL MEDIA
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="social-buttons">
        <button className="facebook">
          <i className="fab fa-facebook-f"></i>
          <span>|</span> FACEBOOK
        </button>
        <button className="google">
          <i className="fab fa-google"></i>
          <span>|</span> GOOGLE
        </button>
        <button className="twitter">
          <i className="fab fa-twitter"></i>
          <span>|</span> TWITTER
        </button>
      </div>
    </div>
  );
}
