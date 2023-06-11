import { getDocByType } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

const PostDetailPage = async ({ params: { slug } }: Props) => {
  const blog = await getDocByType(slug, "blog");
  return (
    <article className="pb-24 mx-4 prose-sm prose md:mx-auto md:prose-base lg:prose-lg ">
      {/* @ts-expect-error Server Component*/}
      <MDXRemote source={blog.content} />
    </article>
  );
};

export default PostDetailPage;
