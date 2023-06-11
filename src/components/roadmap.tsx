import { IconType } from "react-icons/lib";
import {
  TiInputChecked,
  TiTick,
  TiTimes,
  TiTimesOutline,
} from "react-icons/ti";
import React from "react";

export type RoadmapGroup = {
  title: string;
  Icon: IconType;
  color: string;
  content: RoadmapItem[];
};

type RoadmapItem = {
  isDone: boolean;
  roadmapTitle: string;
};

export const RoadmapSection = ({
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
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
      {itemList.map((item, index) => (
        <RoadmapCard
          title={item.title}
          Icon={item.Icon}
          content={item.content}
          color={item.color}
          key={index}
        />
      ))}
    </ul>
  </>
);

export const RoadmapCard = ({ title, Icon, content, color }: RoadmapGroup) => {
  return (
    <li
      key={title}
      className="flex bg-white flex-col items-start space-y-4 retro-shadow border-[#000000] border-[2px] p-4"
    >
      <div
        className={`retro-shadow p-2 border-[#000000]  border-[2px]  text-4xl text-white ${color}`}
      >
        {<Icon />}
      </div>
      <h4 className="text-lg font-black">{title}</h4>
      <ul className="space-y-2">
        {content.map((roadmapItem, index) => (
          <RoadmapItem key={index} roadmapItem={roadmapItem} />
        ))}
      </ul>
    </li>
  );
};

export const RoadmapItem = ({ roadmapItem }: { roadmapItem: RoadmapItem }) => {
  return (
    <li className={`flex items-center space-x-2`}>
      {roadmapItem.isDone ? (
        <TiTick className="text-lime-500" />
      ) : (
        <TiTimesOutline />
      )}
      <span>{roadmapItem.roadmapTitle}</span>
    </li>
  );
};
