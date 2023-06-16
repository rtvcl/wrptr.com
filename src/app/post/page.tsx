import BlogListSection from "@/components/blog-list-section";
import { notion } from "@/lib/notion-service";
import React from "react";

type Props = {};

const PostPage = async (props: Props) => {
  let blogs;
  try {
    blogs = await notion.getAllPost({ isFeatured: false });
  } catch (error) {
    console.log(error);
  }

  return <BlogListSection blogs={blogs} />;
};

export default PostPage;
