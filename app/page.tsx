"use client";

import AttractionCard from "./app-components/cards/AttractionCard";
import AttractionFilterUI from "./app-components/extras/attraction-filter/AttractionFilterUI";
import HomeHeader from "./app-components/homepage-components/HomeHeader";

export default function Home() {
  return (
    <main className="container mx-auto">
      <section className="w-full">
        <HomeHeader />
      </section>
      <section className="flex justify-end my-8">
        <AttractionFilterUI />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 w-full max-w-8xl px-4">
        <AttractionCard />
      </section>
    </main>
  );
}
