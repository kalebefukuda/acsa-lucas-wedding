import Gift from "@/components/gift";
import  Hero  from "@/components/hero";
import LocationAndSuggestions from "@/components/localAndSuggestion";
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
      <LocationAndSuggestions />
      <ScrollingBanner />
      <Gift />

    </>
  );
}
