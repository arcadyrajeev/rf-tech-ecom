"use client";

import Link from "next/link";
import BlogPostCard from "./BlogPostCard";
import { blogCardData } from "@/lib/typesIntefaces";
import { ArrowUpRight } from "lucide-react";

interface BlogPostProps {
  title: string;
  link?: string;
  linkLabel?: string;
  blogPosts: blogCardData[];
}

export default function BlogPostSection({
  title,
  link = "/blog",
  linkLabel = "View all Posts",
  blogPosts,
}: BlogPostProps) {
  return (
    <section className=" w-full py-16 md:py-24 bg-white">
      <div className="flex flex-col items-center max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-[3vw] text-black font-bold text-center mb-12 uppercase tracking-wide">
          {title}
        </h2>

        {/* Blog Grid */}
        <div className="w-full grid grid-cols-1 lg:mt-6 md:grid-cols-3 gap-15 lg:gap-10">
          {blogPosts.map((post, idx) => (
            <BlogPostCard key={idx} cardData={post} />
          ))}
        </div>
        {/* Navigation link */}
        <Link
          href={link}
          className="flex mt-20 text-cyan-800 font-semibold text-2xl lg:text-[1.4vw] hover:underline"
        >
          {linkLabel}
          <ArrowUpRight />
        </Link>
      </div>
    </section>
  );
}
