import { RoadmapSection } from "@/components/roadmap";
import React from "react";
import { TiSocialTumbler } from "react-icons/ti";
import { dataWebsiteRoadmap } from "./data";

type Props = {};

const RoadmapPage = (props: Props) => {
  return (
    <section className="max-w-screen-lg mx-4 mb-12 lg:mx-auto">
      <h1 className="mb-4 text-4xl font-black ">/roadmap</h1>
      <div className="space-y-4">
        <p className="max-w-xl">
          Welcome to the roadmap page of my personal website! Here, I&apos;m
          excited to share with you the exciting plans I have in store for the
          future development of my website. Below, you&apos;ll find a glimpse
          into the exciting features and enhancements I have planned for my
          website.
        </p>
        <RoadmapSection
          title="website"
          itemList={dataWebsiteRoadmap}
        />
      </div>
    </section>
  );
};

export default RoadmapPage;
