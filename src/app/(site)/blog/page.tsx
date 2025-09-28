import BlogPostSection from "@/components/BlogPostSection";
import React from "react";

import { blogCardData } from "@/lib/typesIntefaces";
import data from "@/data/allBlogs.json";

const blogPosts: blogCardData[] = data;

const BlogPage = () => {
  return (
    <div>
      <BlogPostSection
        title="News and Articles"
        blogPosts={blogPosts}
        link="/store"
        linkLabel="Go to Store"
      />
    </div>
  );
};

export default BlogPage;
