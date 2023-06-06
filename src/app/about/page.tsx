import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  TiMail,
  TiMap,
  TiSocialGithub,
  TiSocialLinkedin,
} from "react-icons/ti";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <>
      <div className="flex flex-wrap max-w-xl gap-4 mx-4 mb-4 sm:mx-auto">
        <Image
          width={240}
          height={100}
          src="/about-img.jpg"
          className="retro-shadow flex-shrink-0 border-[#000000] border-[2px] object-cover"
          alt="about"
        />
        <div className="retro-shadow p-4 bg-white border-[#000000] border-[2px] flex-1 flex flex-col">
          <h3>Contacts</h3>
          <ul>
            <li className="flex items-center space-x-4">
              <TiMail size={32} />
              <span>agungwpg@ggmail.com</span>
            </li>
            <li>
              <Link className="flex items-center space-x-4 hover:text-[#A57EE5]" href="https://www.linkedin.com/in/agungwpg/" target="_blank">
                <TiSocialLinkedin size={32} />
                <span>Connect on LinkedIn</span>
              </Link>
            </li>
            <li >
              <Link className="flex items-center space-x-4 hover:text-[#A57EE5]" href="https://github.com/agungwpg" target="_blank">
                <TiSocialGithub size={32} />
                <span>Follow on Github</span>
              </Link>
            </li>
            <li className="flex items-center space-x-4">
              <TiMap size={32} />
              <span>South Jakarta, ID</span>
            </li>
          </ul>
          <Link
            target="_blank"
            href="/cv-wira-2022.pdf"
            className=" font-bold border-[#000000] border-[1px] mt-4 retro-shadow-sm hover:text-white hover:bg-black transition-colors px-4 -translate-y-1  text-center"
          >
            Download CV
          </Link>
        </div>
      </div>
      <div className="bg-white max-w-xl p-4 mx-4 sm:mx-auto retro-shadow border-[#000000] border-[2px] space-y-4">
        <h1 className="mb-2 text-xl font-bold ">
          Agung <span className="italic font-black">WIRA</span> Putra
        </h1>
        <p>
          Coming from a tech background, today I am trying to find a sweet spot
          between Business, Tech, and Design to face and solve user&apos;s
          problems as a Product Manager.
        </p>
        <p>
        I&apos;m currently rocking the role of a product manager at a tech company. Our mission? Empowering Indonesian MSMEs to conquer the online world and embrace all things digital. I&apos;ve been at the forefront, orchestrating promotions, analytics, and now, on a thrilling adventure to amp up our merchant buyers&apos; experience. 
        </p>
      </div>
    </>
  );
};

export default AboutPage;
