import Navigation from "@/components/navigation";
import SubscriptionForm from "@/components/subscription-form";
import Image from "next/image";
import Link from "next/link";
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialGithub,
  TiSocialInstagram
} from "react-icons/ti";

export default function Home() {
  return (
    <>
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
            Product Manager with a love for problem-solving and uncovering
            insights through data analysis.
          </p>
          <Link  href="/about-me" className="absolute -right-4 -bottom-4 px-6 whitespace-nowrap py-2 text-lg  font-extrabold bg-[#2CE0AC] retro-shadow hover:bg-[#A57EE5] transition-colors ">
            get in touch!
          </Link>
        </div>
        <ul className="absolute left-0 flex justify-center cursor-pointer top-[15.5rem]">
          <li className="hover:text-[#A57EE5] flex place-items-center">
            <TiSocialTwitter size={32} />
          </li>

          <li className="hover:text-[#A57EE5] flex place-items-center">
            <TiSocialLinkedin size={32} />
          </li>
          <li className="hover:text-[#A57EE5] flex place-items-center">
            <TiSocialGithub size={32} />
          </li>
          <li className="hover:text-[#A57EE5] flex place-items-center">
            <TiSocialInstagram size={28} />
          </li>
        </ul>
      </div>
      <div></div>
      <SubscriptionForm/>
      <section className="max-w-xl mx-4 mt-4 sm:mx-auto">
        <h3 className="mb-4 text-2xl font-black ">/blog-post</h3>
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
      <div className="max-w-2xl p-4 mt-6 text-white bg-black rounded-t-[28px] md:mx-auto">
      <section className="max-w-xl mx-auto ">
        <h3 className="mb-4 text-2xl font-black ">/moodboard</h3>
        <div className="space-y-4">
          <p>
            This is my moodboard, a collection of images, colors, and textures
            that represent the aesthetic I hope to achieve with my website.
          </p>

          <Image
          className="mx-auto"
            src="/moodboard.png"
            alt="moodboard"
            width={720}
            height={360}
          />
          <p>
            As a product manager with a strong interest in tech and engineering,
            I know that a website is more than just a digital presence –
            it&apos;s an extension of my personal brand. That&apos;s why
            I&apos;m working on this moodboard as my initial intention for my
            website styles.{" "}
          </p>
        </div>
      </section>
      <p className="mt-4 text-center">* * *</p>
      <footer className="text-sm text-center ">designed and developed with 💗 by Wira in 2023</footer>        
      </div>
    </>
  );
}
