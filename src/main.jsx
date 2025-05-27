import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "simple-line-icons/css/simple-line-icons.css";

// main.jsx or App.jsx
import "@fortawesome/fontawesome-free/css/all.min.css";
import ShopContextProvider from "./Context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Portfolio-Project-2/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
