import React from "react";

type Props = {};

const PostPage = (props: Props) => {
  return (
    <section className="max-w-xl mx-4 mt-4 sm:mx-auto">
      <h1 className="mb-4 text-4xl font-black ">/blog-post</h1>
      <ul className="space-y-6">
        <li className="flex space-x-4">
          <div className="flex-shrink-0 w-32 h-24 bg-slate-300">
            this is image
          </div>
          <div className="flex flex-col ">
            <h4 className="text-base font-bold">dont miss out.</h4>
            <p className="text-sm line-clamp-2 ">
              Sign up for my newsletter to stay in the loop.
            </p>
            <button className="mt-auto self-start font-bold border-[#000000] border-[1px] retro-shadow-sm hover:text-white hover:bg-black transition-colors px-4 -translate-y-1">
              read more
            </button>
          </div>
        </li>
        <li className="flex space-x-4">
          <div className="flex-shrink-0 w-32 h-24 bg-slate-300">
            this is image
          </div>
          <div className="flex flex-col ">
            <h4 className="text-base font-bold">dont miss out.</h4>
            <p className="text-sm line-clamp-2 ">
              Sign up for my newsletter to stay in the loop.
            </p>
            <button className="mt-auto self-start font-bold border-[#000000] border-[1px] retro-shadow-sm hover:text-white hover:bg-black transition-colors px-4 -translate-y-1">
              read more
            </button>
          </div>
        </li>
        <li className="flex space-x-4">
          <div className="flex-shrink-0 w-32 h-24 bg-slate-300">
            this is image
          </div>
          <div className="flex flex-col ">
            <h4 className="text-base font-bold">dont miss out.</h4>
            <p className="text-sm line-clamp-2 ">
              Sign up for my newsletter to stay in the loop.
            </p>
            <button className="mt-auto self-start font-bold border-[#000000] border-[1px] retro-shadow-sm hover:text-white hover:bg-black transition-colors px-4 -translate-y-1">
              read more
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default PostPage;
