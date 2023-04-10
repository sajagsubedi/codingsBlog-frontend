import React from "react";
import BlogPageSection from "./Components/BlogPageSection";
import CommentSection from "./Components/CommentSection";

export default function BlogPage({ blogData }) {
  return (
    <section>
      <BlogPageSection blogData={blogData} />
      <CommentSection blogId={blogData._id} />
    </section>
  );
}
