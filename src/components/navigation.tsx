"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

const activeState = `flex-shrink-0 px-2 py-2 bg-black after:content-[''] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#A57EE5]`;
const nonActiveState = `flex-shrink-0 px-2 transition-all bg-black cursor-pointer hover:py-2`;

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
    href: "/blog-post",
    label: "blog-post",
  },
  {
    href: "/about-me",
    label: "about-me",
  },
  {
    href: "/portfolio",
    label: "portfolio",
  },
  {
    href: "/roadmap",
    label: "roadmap",
  }
];

function Navigation({}: Props) {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 pb-4 ml-4 bg-[#fafafa] md:flex md:ml-0 md:justify-center md:items-center sm:gap-8">
      <Link href="/">
      <span className="text-3xl font-black leading-loose">wrptr.com</span>
      </Link>
      <nav>
        <ul className="flex items-start gap-2 overflow-x-auto text-base font-semibold text-white md:mt-4 flex-nowrap whitespace-nowrap">
          {navigationList.map(({ href, label }) => (
            <Link href={href} key={label}>
              <li className={pathname == href ? activeState : nonActiveState}>
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

{
  /* <div className="mb-4 ml-4 md:flex md:ml-0 md:justify-center md:items-center sm:gap-8">
        <span className="text-3xl font-black leading-loose">wrptr.com</span>
        <nav>
          <ul className="flex items-start gap-2 overflow-x-auto text-base font-semibold text-white md:mt-4 flex-nowrap whitespace-nowrap">
            <li className="flex-shrink-0 px-2 py-2 bg-black after:content-[''] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#A57EE5]">
              home
            </li>
            <li className="flex-shrink-0 px-2 transition-all bg-black cursor-pointer hover:py-2">
              blog-post
            </li>
            <li className="flex-shrink-0 px-2 transition-all bg-black cursor-pointer hover:py-2">
              about-me
            </li>
            <li className="flex-shrink-0 px-2 transition-all bg-black cursor-pointer hover:py-2">
              portfolio
            </li>
            <li className="flex-shrink-0 px-2 transition-all bg-black cursor-pointer hover:py-2">
              roadmap
            </li>
            <li className="flex-shrink-0 px-2 transition-all bg-black cursor-pointer hover:py-2">
              resource
            </li>
            <li className="flex-shrink-0 px-2 transition-all bg-black cursor-pointer hover:py-2">
              uses
            </li>
          </ul>
        </nav>
      </div> */
}
