import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Pages from "./Pages/Pages";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";

import LoginSignup from "./pages/LoginSignup";
import LogoCarousel from "../src/Components/LogoCarousel/LogoCarousel";
import CartItems from "./Components/CartItems/CartItems";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Contact from "./Pages/Contact";

function App() {
  const logos = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
    "/logos/logo7.png",
    "/logos/logo8.png",
    "/logos/logo9.png",
    "/logos/logo10.png",
    "/logos/logo11.png",
    "/logos/logo12.png",
    "/logos/logo13.png",
    "/logos/logo14.png",
    "/logos/logo15.png",
    "/logos/logo16.png",
  ];
  function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
      <>
        <button onClick={() => setIsCartOpen(true)}>🛒</button>
        {isCartOpen && <CartPanel onClose={() => setIsCartOpen(false)} />}
        {/* Other content */}
      </>
    );
  }
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/about" element={<About />} />
            <Route path="/collection" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/megastore"
              element={<ShopCategory category="megastore" />}
            />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/LoginSignup" element={<LoginSignup />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
