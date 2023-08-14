import Image from "next/image";
import React from "react";
import ImageMoodboard from "@/assets/img/moodboard.png";
import ImgGrungeTextureDark1 from "@/assets/img/grunge-texture-dark-1.webp";
import { FOOTER_COPY } from "@/config/general";

type Props = {};

export const BlackGrungeSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`text-white rounded-t-[28px] ${className}`}
      style={{
        background: `no-repeat center / cover url(${ImgGrungeTextureDark1.src})`,
      }}
    >
      {children}
    </div>
  );
};

const MoodboardSection = (props: Props) => {
  return (
    <BlackGrungeSection className="max-w-2xl p-4 mt-6 md:mx-auto">
      <section className="max-w-xl mx-auto ">
        <h3 className="mb-4 text-2xl font-black ">/moodboard</h3>
        <div className="space-y-4">
          <p>
            This is my moodboard, a collection of images, colors, and textures
            that represent the aesthetic I hope to achieve with my website.
          </p>
          <Image
            className="mx-auto"
            src={ImageMoodboard}
            alt="moodboard"
            width={720}
            height={360}
          />
          <p>
            As a product manager with a strong interest in tech and engineering,
            I know that a website is more than just a digital presence –
            it&apos;s an extension of my personal brand.
          </p>
        </div>
      </section>
      <p className="mt-4 text-center">* * *</p>
      <FooterTrademark />
    </BlackGrungeSection>
  );
};

export const FooterTrademark = () => (
  <footer className="mb-4 text-sm text-center ">{FOOTER_COPY}</footer>
);

export default MoodboardSection;
