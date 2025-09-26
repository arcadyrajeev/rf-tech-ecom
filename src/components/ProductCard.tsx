import { productCardData } from "@/lib/typesIntefaces";
import Image from "next/image";

interface ProductCardProps {
  product: productCardData;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="min-w-[20vw] max-w-[20vw] h-[40vw] bg-gray-50 rounded-lg shadow hover:shadow-lg transition  flex flex-col">
      {/* Product Image */}
      <div className="h-[20vw] border border-gray-200 rounded-lg w-full relative overflow-hidden flex justify-center items-center">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover w-full h-full absolute"
        />
      </div>

      {/* Product Info */}
      <div className="flex  flex-col px-[1vw] ">
        {" "}
        <h3 className="mt-4 text-[1.4vw] text-black">{product.title}</h3>
        <p className="text-md md:text-[1.2vw] text-gray-700 mt-2">
          {product.description}
        </p>
      </div>
      {/* Actions */}
      <div className="mt-auto flex flex-col gap-2  p-3">
        {/* Pricing */}
        <div className="mt-3">
          <p className="text-gray-400 line-through">${product.oldPrice}</p>
          <p className="text-lg md:text-[2vw] font-semibold text-gray-800">
            ${product.price}{" "}
            <span className="text-green-600 text-sm">{product.discount}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
