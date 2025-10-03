"use client";
import Image from "next/image";

const categories = [
  { name: "POS Systems", image: "/images/categories/pos.png" },
  { name: "Payment Devices", image: "/images/categories/pay.png" },
  { name: "Barcode/ QR Scanners", image: "/images/categories/scanner.jpg" },
  { name: "Receipt & Label Printers", image: "/images/categories/printer.png" },
  { name: "Cash Handling Devices", image: "/images/categories/cash.png" },
  { name: "Handheld Computers", image: "/images/categories/handheld.png" },
  {
    name: "Retail & Store Accessories",
    image: "/images/categories/retail.png",
  },
  { name: "Bundles & Kits", image: "/images/categories/bundle.png" },
];

export default function ProductCategories() {
  return (
    <section className="w-full py-26 md:py-[6vw] lg:py-[8vw] bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl text-black md:text-[4vw] font-medium text-center mb-12">
          PRODUCT CATEGORY
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 space-y-8 md:gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex  flex-col  items-center h-68 xl:h-84 rounded-lg bg-gray-100 hover:shadow-lg transition cursor-pointer"
            >
              <div className=" rounded-lg w-full h-48 xl:h-[20vw] relative overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="my-4 px-3 text-center text-md md:text-xl  xl:text-[1.4vw] font-medium text-gray-700">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
