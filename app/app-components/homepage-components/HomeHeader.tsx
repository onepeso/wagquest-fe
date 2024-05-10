import { ArrowDownIcon } from "lucide-react";
import React from "react";
import Image from "next/image";

const HomeHeader = () => {
  return (
    <header className=" bg-[#F5F5F5] bg-cover bg-center w-full py-8 md:py-20 flex flex-col items-center justify-center">
      <div className="max-w-2xl px-4 mx-auto text-center">
        <div className="flex flex-col md:flex md:flex-row-reverse items-center">
          <div className="pb-5">
            <Image
              src="/nature.svg"
              alt="hero"
              width={300}
              height={600}
              className="w-40 md:w-48"
            />
          </div>
          <h1 className="text-2xl md:text-7xl font-bold mb-2 text-[#403d39] capitalize w-fit">
            <span className="text-main">Unleash</span> the Adventure
          </h1>
        </div>

        <p className="mb-6 text-base text-black md:text-lg">
          Explore a world of dog-friendly locations and experiences with
          WagQuest. Find the perfect dog parks, trails, cafes, and more. Connect
          with fellow dog owners and embark on new adventures with your furry
          friend.
        </p>
      </div>
    </header>
  );
};

export default HomeHeader;
