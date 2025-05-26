import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "simple-line-icons/css/simple-line-icons.css";

// main.jsx or App.jsx
import "@fortawesome/fontawesome-free/css/all.min.css";
import ShopContextProvider from "./Context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  // </StrictMode>
);
