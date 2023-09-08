import BlogListSection from "@/components/blog-list-section";
import HeroSection from "@/components/hero-section";
import MoodboardSection from "@/components/moodboard-section";
import SubscriptionForm from "@/components/subscription-form";
import { notion } from "@/lib/notion-service";

export default async function Home() {
  let blogs;
  try {
    blogs = await notion.getAllPost({ isFeatured: true });
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong...");
  }
  return (
    <>
      <HeroSection />
      <SubscriptionForm />
      <BlogListSection blogs={blogs} />
      <MoodboardSection />
    </>
  );
}
