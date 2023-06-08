import React from "react";
import { IconType } from "react-icons/lib";
import {
  TiInputChecked,
  TiSocialTumbler,
  TiSocialTumblerCircular,
  TiTimes,
} from "react-icons/ti";

type Props = {};

const RoadmapPage = (props: Props) => {
  return (
    <section className="max-w-screen-lg mx-4 lg:mx-auto">
      <h1 className="mb-4 text-4xl font-black ">/roadmap</h1>
      <div className="space-y-4">
        <p>
          Welcome to the roadmap page of my personal website! Here, I&apos;m
          excited to share with you the exciting plans I have in store for the
          future development of my website. Below, you&apos;ll find a glimpse
          into the exciting features and enhancements I have planned for my
          website.
        </p>
        <RoadmapList
          title="website"
          itemList={[
            {
              title: "General Information",
              icon: TiSocialTumbler,
              content: [
                { roadmapTitle: "asdas", isDone: true },
                { roadmapTitle: "adasjndijan", isDone: false },
                { roadmapTitle: "adasd", isDone: false }
              ],
            },
          ]}
        />
      </div>
    </section>
  );
};

type RoadmapGroup = {
  title: string;
  icon: IconType;
  content: RoadmapItem[];
};

type RoadmapItem = {
  isDone: boolean;
  roadmapTitle: string;
};

const RoadmapList = ({
  title,
  itemList,
}: {
  title: string;
  itemList: RoadmapGroup[];
}) => (
  <>
    <h2 className="flex items-center text-2xl font-bold">
      <span className="text-3xl">#</span>
      {title}
    </h2>
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {itemList.map((item, index) => (
        <li
          key={item.title}
          className="flex bg-white flex-col items-start space-y-4 retro-shadow border-[#000000] border-[2px] p-4"
        >
          <div className="retro-shadow p-2 border-[#000000] border-[2px] bg-lime-500 text-6xl text-white">
            <item.icon />
          </div>
          <h4 className="text-lg font-black">{item.title}</h4>
          <ul className="space-y-2">
            {item.content.map((roadmapItem, index) => (
              <li key={index} className="flex items-center space-x-2">
                {roadmapItem.isDone ? <TiInputChecked /> : <TiTimes />}
                <span>{roadmapItem.roadmapTitle}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </>
);

export default RoadmapPage;
