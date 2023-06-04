import Image from "next/image";
import React from "react";

type Props = {};

const MoodboardSection = (props: Props) => {
  return (
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
      <footer className="text-sm text-center ">
        designed and developed with 💗 by Wira in 2023
      </footer>
    </div>
  );
};

export default MoodboardSection;
