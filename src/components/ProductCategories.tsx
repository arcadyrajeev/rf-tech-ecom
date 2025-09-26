"use client";
import Image from "next/image";

const categories = [
  { name: "POS Systems", image: "/images/categories/pos.png" },
  { name: "Payment Devices", image: "/images/categories/pay.png" },
  { name: "Barcode/ QR Scanners", image: "/images/categories/scanner.jpg" },
  { name: "Receipt & Label Printers", image: "/images/categories/printer.png" },
  { name: "Cash Handling Devices", image: "/images/categories/cash.png" },
  {
    name: "Retail & Store Accessories",
    image: "/images/categories/retail.png",
  },
  { name: "Software & Services", image: "/images/categories/software.png" },
  { name: "Bundles & Kits", image: "/images/categories/bundle.png" },
];

export default function ProductCategories() {
  return (
    <section className="w-full py-60 md:py-[8vw] bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl text-black md:text-[4vw] font-medium text-center mb-12">
          PRODUCT CATEGORY
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex  flex-col py-2 items-center  rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              <div className="w-[20vw] rounded-lg h-[20vw] relative overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-4 text-center font-medium text-gray-700">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
