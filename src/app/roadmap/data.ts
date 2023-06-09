import { RoadmapGroup } from "@/components/roadmap";
import { TiBook, TiHome, TiMediaStop, TiNews } from "react-icons/ti";

export const dataWebsiteRoadmap: RoadmapGroup[] = [
    {
      title: "General",
      Icon: TiHome,
      color: 'bg-pink-600',
      content: [
        { roadmapTitle: "Contact Me Form", isDone: false },
        { roadmapTitle: "Analytics Tracking", isDone: false },
        { roadmapTitle: "SEO Support", isDone: false },
        { roadmapTitle: "i11n: Enlish, Indonesia", isDone: false },
      ],
    },
    {
      title: "Pages",
      Icon: TiBook,
      color: 'bg-sky-500',
      content: [
        { roadmapTitle: "Roadmap Page", isDone: true },
        { roadmapTitle: "Uses tech Page", isDone: false },
        { roadmapTitle: "Products (Built in Public)", isDone: false },
        { roadmapTitle: "Portfolio", isDone: false },
      ],
    },
    {
      title: "Blog",
      Icon: TiNews,
      color: 'bg-lime-500',
      content: [
        { roadmapTitle: "Search Function", isDone: false },
        { roadmapTitle: "Notion Integrations", isDone: false },
        { roadmapTitle: "Meta Data, Tags/Categories", isDone: false },
        { roadmapTitle: "Code Highlight & Comment Section", isDone: false },
      ],
    },
    {
      title: "Others",
      Icon: TiMediaStop,
      color: 'bg-violet-500',
      content: [
        { roadmapTitle: "Movie Review", isDone: false },
        { roadmapTitle: "Spotify Integrations", isDone: false },
        { roadmapTitle: "Book Review", isDone: false },
        { roadmapTitle: "Product Review", isDone: false },
      ],
    },
  ]