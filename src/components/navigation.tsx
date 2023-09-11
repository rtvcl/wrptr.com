"use client";
import { BRAND_NAME } from "@/config/general";
import { NAVIGATION_LIST } from "@/config/navigation";
import { useScroll } from "@/hooks/use-scroll";
import { clsx } from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export type NavItem = {
  href: string;
  label: string;
};

function Navigation() {
  const segment = useSelectedLayoutSegment() || "";
  const { scrollY } = useScroll();
  return (
    <div
      className={clsx(
        "sticky top-0 z-50 pb-4 md:flex md:ml-0 md:justify-center md:items-center sm:gap-8 transition-colors bg-transparent",
        scrollY > 0 && "bg-zinc-100 shadow-md"
      )}>
      <Link href="/">
        <span className="pl-4 text-3xl font-black leading-loose">{BRAND_NAME}</span>
      </Link>
      <nav>
        <ul className="flex items-start gap-2 px-4 overflow-x-auto text-base font-semibold text-white xs:pl-0 md:mt-4 flex-nowrap whitespace-nowrap">
          {NAVIGATION_LIST.map(({ href, label }) => (
            <NavItem key={label} href={href} label={label} segment={segment} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

const NavItem = ({ href, label, segment }: NavItem & { segment: string }) => (
  <Link href={href} key={label}>
    <li
      className={clsx(
        "relative flex-shrink-0 px-2 transition-all bg-black cursor-pointer hover:py-2",
        "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 ",
        segment == href.split("/")[1] &&
          `py-2 after:content-[''] after:bg-[#A57EE5] `
      )}>
      {label}
    </li>
  </Link>
);

export default Navigation;
