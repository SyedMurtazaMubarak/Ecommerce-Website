import React from "react";
import Hero from "../Components/Hero/Hero";
import Nope from "../Components/Nope/Nope";
// import Popular from "../Components/Popular/Popular";
import ProductGrid from "../Components/ProductGrid/ProductGrid";
import ProductPageApp from "./ProductPageApp";
import Newsletter from "../Components/NewsLetter/NewsLetter";
import QuoteSection from "../Components/QuoteSection/QuoteSection";
import LogoCarousel from "../Components/LogoCarousel/LogoCarousel";
import Footer from "../Components/Footer/Footer";
import InstagramGallery from "../Components/InstagramGallery/InstagramGallery";

const Shop = () => {
  return (
    <div>
      <Hero />
      <ProductGrid />

      <Nope />
      <Newsletter />
      <QuoteSection />
      <LogoCarousel />
      <InstagramGallery />
    </div>
  );
};

export default Shop;
