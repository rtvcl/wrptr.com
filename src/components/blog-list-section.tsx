import { getAllDocsByType } from "@/lib/mdx";
import NotionService, { PostProperty, notion } from "@/lib/notion-service";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  blogs: PostProperty[] | undefined;
};
const BlogListSection = ({ blogs }: Props) => {
  return (
    <section className="max-w-xl mx-4 mt-4 sm:mx-auto">
      <h3 className="mb-4 text-2xl font-black ">/blog-post </h3>
      <ul className="space-y-6">
        {blogs &&
          blogs.map((blog) => {
            return (
              <li key={blog.id}>
                <Link href={`/post/${blog.slug}`} className="flex space-x-4">
                  <Image
                    width={320}
                    height={240}
                    className="flex-shrink-0 object-cover w-32 h-24 bg-slate-300"
                    src={blog.cover_url}
                    alt={blog.slug}
                  />
                  <div className="flex flex-col">
                    <h4 className="text-base font-bold">{blog.title}</h4>
                    <p className="mb-4 text-sm line-clamp-2">{blog.short}</p>
                    <button className="self-start font-bold border-[#000000] border-[1px] retro-shadow-sm hover:text-white hover:bg-black transition-colors px-4 -translate-y-1">
                      read more
                    </button>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default BlogListSection;
