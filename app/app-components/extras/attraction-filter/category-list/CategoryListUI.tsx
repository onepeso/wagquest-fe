import NavLinks from "@/lib/navLinks";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  HotelIcon,
  ChefHatIcon,
  TreePalmIcon,
  TicketSlash,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const CategoryListUI = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCategoryMenu = () => {
    setIsOpen(!isOpen);
  };

  const getIcon = (label: string) => {
    switch (label) {
      case "Hotels":
        return <HotelIcon className="w-6 h-6" />;
      case "Restaurants":
        return <ChefHatIcon className="w-6 h-6" />;
      case "Activities":
        return <TreePalmIcon className="w-6 h-6" />;
      case "Events":
        return <TicketSlash className="w-6 h-6" />;
      default:
        return <HotelIcon className="w-6 h-6" />;
    }
  };
  return (
    <>
      <div className="hidden md:flex md:gap-4">
        {NavLinks.map((item: any) => (
          <Button variant="outline">
            <div className="flex gap-2 items-center">
              {getIcon(item.label)}
              {item.label}
            </div>
          </Button>
        ))}
      </div>
      <div className="md:hidden w-full">
        <Button
          onClick={toggleCategoryMenu}
          type="button"
          variant="outline"
          aria-controls="mobile-menu"
          className="w-full flex gap-2"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <>
              <XIcon size={20} aria-hidden="true" />
              <p>Categories</p>
            </>
          ) : (
            <>
              <MenuIcon size={20} aria-hidden="true" />
              <p>Categories</p>
            </>
          )}
        </Button>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="flex flex-col px-2 pt-2 pb-3 space-y-2 sm:px-3">
          {NavLinks.map((item: any) => (
            <Button variant="outline" className="">
              <div className="flex items-center gap-1">
                {getIcon(item.label)}
                {item.label}
              </div>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryListUI;
