import React from "react";

type Props = {};

const RoadmapPage = (props: Props) => {
  return (
    <section className="pb-24 mx-4 md:mx-auto ">
      <h1 className="mb-4 text-4xl font-black ">/roadmap</h1>
      <div className="space-y-4">
        <p>
          Welcome to the roadmap page of my personal website! Here, I&apos;m
          excited to share with you the exciting plans I have in store for the
          future development of my website. Below, you&apos;ll find a glimpse
          into the exciting features and enhancements I have planned for my
          website.
        </p>
        <h2 className="text-gray-400">((styling work in progres...))</h2>
        <RoadmapList />
      </div>
    </section>
  );
};

const RoadmapList = () => (
  <ul className="">
    <li>Subscription: Newsletter form ✅</li>
    <li>Blogging Systems</li>
    <li>Analytics: Google Analytics or Vercel Analytics</li>
    <li>Notion integrations: as Content Management System</li>
    <li>i11n: English & Indonesia</li>
    <li>Contact Me Form</li>
    <li>Saweria / Buy me a coffee concept</li>
    <li>Web3 connect capabilities: 💗 to explore Web3</li>
  </ul>
);

export default RoadmapPage;
