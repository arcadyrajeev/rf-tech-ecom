import React from "react";
import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import ProductCategories from "../components/ProductCategories";
import TrustSection from "../components/TrustSection";
import BestSellers from "../components/BestSellerSection";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <ProductCategories />
      <TrustSection />
      <BestSellers />
    </div>
  );
};

export default Home;
