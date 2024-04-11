"use client";

import AttractionCard from "./app-components/cards/AttractionCard";
import HomeHeader from "./app-components/homepage-components/HomeHeader";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="w-full">
        <HomeHeader />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 w-full max-w-7xl px-4">
        <AttractionCard />
      </section>
    </main>
  );
}
