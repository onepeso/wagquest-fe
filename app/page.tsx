"use client";

import { Button } from "@/components/ui/button";
import AttractionCard from "./app-components/cards/AttractionCard";
import AttractionFilterUI from "./app-components/extras/attraction-filter/AttractionFilterUI";
import CategoryListUI from "./app-components/extras/attraction-filter/category-list/CategoryListUI";
import CtaFooter from "./app-components/homepage-components/CtaFooter";
import HomeHeader from "./app-components/homepage-components/HomeHeader";

export default function Home() {
  return (
    <main className=" w-full p-0">
      <section className="w-full">
        <HomeHeader />
      </section>
      <section className="flex flex-col md:flex-row justify-center my-8 gap-4">
        <CategoryListUI />
        <AttractionFilterUI />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 w-full max-w-8xl px-4">
        <AttractionCard />
      </section>
      <section className="flex flex-col gap-2 md:gap-5 items-center my-10 md:my-20 capitalize text-xl font-semibold">
        <p>continue exploring amazing attractions</p>
        <Button variant="default" className="w-1/3 md:w-1/4 capitalize text-lg">
          show more
        </Button>
      </section>
      <section className="w-full mt-10 bg-gray-100">
        <CtaFooter />
      </section>
    </main>
  );
}
