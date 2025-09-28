import React from "react";

import HomeHero from "@/components/HomeHero";
import ProductCategories from "../components/ProductCategories";
import TrustSection from "../components/TrustSection";
import BestSellers from "../components/BestSellerSection";
import MarketingSection from "@/components/MarketingSection";
import BlogPostSection from "@/components/BlogPostSection";

import { blogCardData } from "@/lib/typesIntefaces";

import data from "@/data/homeBlogs.json";

const blogPosts: blogCardData[] = data;

const Home = () => {
  return (
    <div>
      <HomeHero />
      <ProductCategories />
      <TrustSection />
      <BestSellers />
      <MarketingSection />
      <BlogPostSection title="Recent Blog Posts" blogPosts={blogPosts} />
    </div>
  );
};

export default Home;
