import { Button } from "@/components/ui/button";
import AttractionCard from "./app-components/cards/AttractionCard";
import CtaFooter from "./app-components/homepage-components/CtaFooter";
import HomeHeader from "./app-components/homepage-components/HomeHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WagQuest",
  description:
    "WagQuest is a web app that helps you find the best attractions and activities for you and your dog.",
  keywords: "dog, dog attractions, travel, attractions, activities,",
  openGraph: {
    title: "WagQuest",
    description:
      "WagQuest is a web app that helps you find the best attractions and activities for you and your dog.",
    type: "website",
    url: "https://wagquest.com",
    images: [
      {
        url: "https://www.wagquest.com/nature.svg",
        width: 1200,
        height: 630,
        alt: "WagQuest",
      },
    ],
    locale: "en_US",
  },
};

export default function Home() {
  return (
    <main className=" w-full p-0">
      <section className="w-full">
        <HomeHeader />
      </section>
      <section className="flex flex-col md:flex-row justify-center my-8 gap-4"></section>
      <section className="md:container md:mx-auto">
        <h3 className="px-4 md:px-7 lg:px-8">Latest Attractions</h3>
        <div className="md:container md:mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 w-full max-w-8xl px-4">
          <AttractionCard />
        </div>
      </section>

      <section className="w-full mt-10 bg-gray-100">
        <CtaFooter />
      </section>
    </main>
  );
}
