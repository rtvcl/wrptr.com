import { notion } from "@/lib/notion-service";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const PostDetailPage = async ({ params: { slug } }: Props) => {
  const { cover_url, title, markdown } = await notion.getPostBySlug(slug);
  return (
    <article className="pb-24 mx-4 prose-sm prose md:mx-auto md:prose-base lg:prose-lg prose-h1:text-3xl">
      <figure className="relative mt-6">
        <div className="relative flex items-center justify-center h-auto max-w-2xl mx-auto my-0 overflow-hidden max-h-96">
          <Image
            className="w-full"
            src={cover_url}
            alt={`cover ${title}`}
            width={1600}
            height={900}
          />
        </div>
      </figure>
      <h1>{title}</h1>
      {/* <MDXRemote source={markdown.parent} /> */}
    </article>
  );
};

export default PostDetailPage;
