"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h2 className="text-center">
        Error: The requested page or resource could not be found...
      </h2>
      <Link
        href="/post"
        className=" px-6 whitespace-nowrap py-2 text-lg w-fit  font-extrabold bg-[#2CE0AC] retro-shadow hover:bg-[#A57EE5] transition-colors -rotate-3 mt-4">
        See Blog Post
      </Link>
    </div>
  );
}
