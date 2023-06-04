import { getAllDocsByType } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const lorem5 = "Lorem ipsum dolor sit amet.";
const lorem20 =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, repellat quam! Temporibus sunt beatae laudantium nulla, corrupti similique tenetur iusto!";

const BlogListSection = (props: Props) => {
  const blogs = getAllDocsByType("blog");

  return (
    <section className="max-w-xl mx-4 mt-4 sm:mx-auto">
      <h3 className="mb-4 text-2xl font-black ">/blog-post </h3>
      <ul className="space-y-6">
        {blogs.map((blog) => {
          return (
            <li key={blog.slug}>
              <Link href={`/post/${blog.slug}`} className="flex space-x-4">
                <Image width={32} height={24} className="flex-shrink-0 w-32 h-24 bg-slate-300" src={blog.meta.image || ''} alt={blog.slug}/>
                <div className="flex flex-col">
                  <h4 className="text-base font-bold">
                    {blog.meta.title || lorem5}
                  </h4>
                  <p className="mb-4 text-sm line-clamp-2">
                    {blog.meta.summary || lorem20}
                  </p>
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
