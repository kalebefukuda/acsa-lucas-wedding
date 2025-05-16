import  Hero  from "@/components/hero";
import SaveTheDate from "@/components/saveTheDate";
import ScrollingBanner from "@/components/scrolling-banner";
import StoryAndPhotos from "@/components/story-and-photos";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollingBanner />
      <SaveTheDate />
      <ScrollingBanner />
      <StoryAndPhotos />
    </>
  );
}
