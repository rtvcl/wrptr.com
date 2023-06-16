import BlogListSection from "@/components/blog-list-section";
import HeroSection from "@/components/hero-section";
import MoodboardSection from "@/components/moodboard-section";
import SubscriptionForm from "@/components/subscription-form";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <SubscriptionForm />
      <BlogListSection isFeatured={true} />
      <MoodboardSection />
    </>
  );
}
