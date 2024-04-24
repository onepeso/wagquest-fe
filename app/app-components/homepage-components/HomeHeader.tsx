import { ArrowDownIcon } from "lucide-react";
import React from "react";

const HomeHeader = () => {
  return (
    <header className="relative bg-cover bg-center w-full py-20 md:py-20 flex items-center justify-center bg-[#F5F5F5]">
      <div className="absolute inset-0 bg-[#F5F5F5]"></div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-2xl md:text-7xl font-bold mb-2 text-[#403d39] capitalize">
          <span className="text-[#eb5e28]">Unleash</span> the Adventure
        </h1>
        <p className="text-base md:text-lg mb-6 text-black">
          Explore a world of dog-friendly locations and experiences with
          WagQuest. Find the perfect dog parks, trails, cafes, and more. Connect
          with fellow dog owners and embark on new adventures with your furry
          friend.
        </p>
        <button className="font-bold py-2 px-6 rounded-md hover:bg-[#eb4c28] transition-colors duration-300 text-white bg-[#eb5e28]">
          <div className="flex gap-1">
            <ArrowDownIcon />
            Start Exploring
          </div>
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
