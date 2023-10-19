import { RoadmapGroup } from "@/components/roadmap";
import { TiBook, TiHome, TiMediaStop, TiNews, TiUser } from "react-icons/ti";

export const dataWebsiteRoadmap: RoadmapGroup[] = [
  {
    title: "General",
    Icon: TiHome,
    color: "bg-pink-600",
    content: [
      { roadmapTitle: "Analytics Tracking", isDone: true },
      { roadmapTitle: "Desktop Version UI/UX", isDone: true },
      { roadmapTitle: "SEO Support", isDone: false },
      { roadmapTitle: "i11n: English, Indonesia", isDone: false },
    ],
  },
  {
    title: "Pages",
    Icon: TiBook,
    color: "bg-sky-500",
    content: [
      { roadmapTitle: "Roadmap Page", isDone: true },
      { roadmapTitle: "WFA List", isDone: true },
      { roadmapTitle: "Uses tech Page", isDone: false },
      { roadmapTitle: "Portfolio", isDone: false },
    ],
  },
  {
    title: "Blog",
    Icon: TiNews,
    color: "bg-lime-500",
    content: [
      { roadmapTitle: "Notion Integrations", isDone: true },
      { roadmapTitle: "Search Function", isDone: false },
      { roadmapTitle: "Meta Data, Tags/Categories", isDone: false },
      { roadmapTitle: "Code Highlight & Comment Section", isDone: false },
    ],
  },
  {
    title: "About Me",
    Icon: TiUser,
    color: "bg-[#2CE0AC]",
    content: [
      { roadmapTitle: "Contact Me Form", isDone: true },
      { roadmapTitle: "Work Experiences", isDone: true },
      { roadmapTitle: "Tools / Framework / Area", isDone: false },
      { roadmapTitle: "Values / Leadership styles", isDone: false },
    ],
  },
  {
    title: "WFA List",
    Icon: TiMediaStop,
    color: "bg-violet-500",
    content: [
      { roadmapTitle: "List", isDone: true  },
      { roadmapTitle: "Search", isDone: true },
      { roadmapTitle: "Google Maps, Instagram, Tiktok", isDone: true },
      { roadmapTitle: "Detail Page", isDone: false },
    ],
  },
];
