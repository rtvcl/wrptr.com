"use client";
import Link from "next/link";
import {  useSelectedLayoutSegment } from "next/navigation";

type Props = {};

type TNavigationItem = {
  href: string;
  label: string;
};

const navigationList: TNavigationItem[] = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/post",
    label: "blog-post",
  },
  {
    href: "/about",
    label: "about-me",
  },
  // {
  //   href: "/portfolio",
  //   label: "portfolio",
  // },
  {
    href: "/roadmap",
    label: "roadmap",
  },
];

function Navigation({}: Props) {
  const segment = useSelectedLayoutSegment() || "";

  const activeState = `flex-shrink-0 px-2 py-2 bg-black after:content-[''] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#A57EE5]`;
  const nonActiveState = `flex-shrink-0 px-2 transition-all bg-black cursor-pointer hover:py-2`;

  return (
    <div className="sticky top-0 z-50 pb-4 ml-4 bg-[#fafafa] md:flex md:ml-0 md:justify-center md:items-center sm:gap-8">
      <Link href="/">
        <span className="text-3xl font-black leading-loose">wrptr.com</span>
      </Link>
      <nav>
        <ul className="flex items-start gap-2 overflow-x-auto text-base font-semibold text-white md:mt-4 flex-nowrap whitespace-nowrap">
          {navigationList.map(({ href, label }) => (
            <Link href={href} key={label}>
              <li
                className={
                  segment == href.split("/")[1] ? activeState : nonActiveState
                }
              >
                {label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;