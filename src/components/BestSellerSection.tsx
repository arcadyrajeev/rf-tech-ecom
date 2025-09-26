"use client";

import ProductCard from "./ProductCard";
import products from "@/data/bestSellers.json";

export default function BestSellers() {
  return (
    <section className="w-full py-60 md:py-[8vw] bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl text-black md:text-[3vw] font-medium text-center mb-10">
          OUR BEST SELLERS
        </h2>

        {/* Horizontal scrollable product cards */}
        <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-4 e">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
