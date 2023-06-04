import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialGithub,
  TiSocialInstagram,
} from "react-icons/ti";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="relative mx-4 mb-8 sm:max-w-lg sm:mx-auto h-60">
      <Image
        className="object-cover"
        src="/hero-img.png"
        alt="hero"
        fill={true}
      />
      <div className="relative flex flex-col items-end justify-center w-full h-full gap-2 px-4 text-right">
        <h1 className="mb-2 text-xl font-bold ">
          Agung <span className="italic font-black">WIRA</span> Putra
        </h1>
        <p className="text-sm sm:text-base max-w-[50%]">
          From Poker Face to Product Ace: Strategizing Tech, UX, and Business in
          Product Management.
        </p>
        <Link
          href="/about"
          className="absolute -right-4 -bottom-4 px-6 whitespace-nowrap py-2 text-lg  font-extrabold bg-[#2CE0AC] retro-shadow hover:bg-[#A57EE5] transition-colors "
        >
          get in touch!
        </Link>
      </div>
      <ul className="absolute left-0 flex justify-center cursor-pointer top-[15.5rem]">
        <li className="hover:text-[#A57EE5] flex place-items-center">
          <Link target="_blank" href="https://twitter.com/agungwpg">
            <TiSocialTwitter size={32} />
          </Link>
        </li>
        <li className="hover:text-[#A57EE5] flex place-items-center">
          <Link target="_blank" href="https://www.linkedin.com/in/agungwpg/">
            <TiSocialLinkedin size={32} />
          </Link>
        </li>
        <li className="hover:text-[#A57EE5] flex place-items-center">
          <Link target="_blank" href="https://github.com/agungwpg">
            <TiSocialGithub size={32} />
          </Link>
        </li>
        <li className="hover:text-[#A57EE5] flex place-items-center">
          <Link target="_blank" href="https://www.instagram.com/agungwpg/">
            <TiSocialInstagram size={28} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeroSection;
