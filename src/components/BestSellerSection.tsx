"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import products from "@/data/bestSellers.json";

export default function BestSellers() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // scroll ~80% of container width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-14 md:py-[8vw] bg-white relative">
      <div className="w-full flex flex-col items-center px-6">
        <div className="flex justify-between h-12 md:px-20">
          {" "}
          {/* Scroll buttons left*/}
          <button
            onClick={() => scroll("left")}
            className="hidden items-center justify-center cursor-pointer  md:flex z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          {/* Title */}
          <h2 className="text-2xl md:text-3xl text-black lg:text-[3vw] font-medium text-center mb-10">
            OUR BEST SELLERS
          </h2>
          {/* Scroll buttons right*/}
          <button
            onClick={() => scroll("right")}
            className="hidden items-center justify-center cursor-pointer md:flex  z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Horizontal scrollable product cards */}
        <div
          ref={scrollRef}
          className=" flex w-full mt-6 overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
        >
          {products.map((product, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[80%] sm:w-[45%] md:w-[30%] lg:w-[22%]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
