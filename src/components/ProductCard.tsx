import { productCardData } from "@/lib/typesIntefaces";
import Image from "next/image";

interface ProductCardProps {
  product: productCardData;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col cursor-pointer bg-gray-100 rounded-lg  hover:shadow-lg transition w-full max-w-sm md:max-w-md">
      {/* Product Image */}
      <div className="relative w-full h-56 md:h-72 lg:h-80 overflow-hidden rounded-t-lg flex justify-center items-center">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col px-4 py-3 flex-grow">
        <h3 className="mt-2 text-lg md:text-xl font-medium text-black">
          {product.title}
        </h3>
        <p className="text-sm md:text-base text-gray-700 mt-2 line-clamp-2">
          {product.description}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-auto flex flex-col gap-2 p-4 border-t">
        {/* Pricing */}
        <div>
          {product.oldPrice && (
            <p className="text-gray-400 line-through text-sm">
              ${product.oldPrice}
            </p>
          )}
          <p className="text-lg md:text-xl font-semibold text-gray-800">
            ${product.price}{" "}
            {product.discount && (
              <span className="text-green-600 text-sm ml-1">
                {product.discount}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
