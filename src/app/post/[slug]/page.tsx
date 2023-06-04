
import { getDocBySlug } from "@/lib/mdx";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const PostDetailPage = async ({ params: { slug } }: Props) => {
  const { content } = getDocBySlug(slug);
  
  console.log("🚀 ~ file: page.tsx:13 ~ PostDetailPage ~ content:", content)
  

  return (
    <div className="container mx-auto">
      <article
      className="px-8 m-auto my-4 prose lg:prose-xl sm:my-16" />
    </div>
  );
};

export default PostDetailPage;
