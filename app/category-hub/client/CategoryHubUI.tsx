"use client";

import AttractionCard from "@/app/app-components/cards/AttractionCard";
import {
  ScrollIcon,
  GitCommitIcon,
  PawPrintIcon,
  ChevronsDownIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CategoryHubUI = () => {
  return (
    <>
      <section className="bg-gray-100 flex flex-col gap-4 p-10">
        <div className="flex items-center gap-2">
          <PawPrintIcon className="" size={32} />
          <h1 className="text-xl md:text-3xl font-bold">Hotels </h1>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-base md:text-lg">2</p>
          <GitCommitIcon size={20} />
          <p className="font-semibold text-base md:text-lg">
            Atricles in this Category
          </p>
        </div>
        <div>
          <p className=" md:full lg:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod, voluptates, dolorum, quidem soluta quia nemo eaque quos
            voluptatibus rerum quas. Quisquam quod, voluptates, dolorum, quidem
            soluta quia nemo eaque quos voluptatibus rerum quas.
          </p>
        </div>
        <Link href="#attractions" scroll={true} className="md:hidden">
          <Button className="w-full md:w-1/5">
            <span className="mr-2">
              <ChevronsDownIcon />
            </span>
            Explore
          </Button>
        </Link>
      </section>
      <section
        id="attractions"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 w-full max-w-8xl px-4 py-12"
      >
        <AttractionCard />
      </section>
    </>
  );
};

export default CategoryHubUI;
