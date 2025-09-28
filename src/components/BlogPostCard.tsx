"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowUpRight } from "lucide-react";
import { blogCardData } from "@/lib/typesIntefaces";

interface BlogPostCardProps {
  cardData: blogCardData;
}

export default function BlogPostCard({ cardData }: BlogPostCardProps) {
  return (
    <div className="flex flex-col w-full h-100 lg:h-[36vw] cursor-pointer">
      {/* Image */}
      <div className="relative w-full h-52 md:h-60 lg:h-64 overflow-hidden rounded-md bg-gray-200">
        <Image
          src={cardData.imageUrl}
          alt={cardData.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute flex w-full h-full items-center justify-center bg-black/50 opacity-0 hover:opacity-100 text-white text-3xl transition duration-300 ease-in-out">
          View Post <ArrowUpRight size={40} />
        </div>
      </div>

      {/* Date */}
      <p className="text-sm text-gray-500 mt-3 flex items-center gap-1">
        <span className="text-lg">
          <Calendar size={20} />
        </span>{" "}
        {cardData.date}
      </p>

      {/* Title */}
      <h3 className="mt-6 font-medium text-lg md:text-xl text-black">
        {cardData.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm md:text-base mt-2 line-clamp-2">
        {cardData.description}
      </p>

      {/* Read More */}
      <Link
        href={cardData.link}
        className="mt-auto text-sm md:text-base font-medium text-black hover:underline flex items-center gap-1"
      >
        Read More →
      </Link>
    </div>
  );
}
