"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLinks from "@/lib/navLinks";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="text-white font-bold text-xl">WagQuest</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {NavLinks.map((link: any, index: number) => (
                  <Link
                    href={link.href}
                    className="text-white hover:bg-[#403d39] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    key={index}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex gap-3 items-center ">
            {/* Clerk components */}
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div className="text-white flex gap-3">
                <SignInButton />
                <SignUpButton />
              </div>
            </SignedOut>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XMarkIcon
                    className="block h-6 w-6 text-black font-extrabold"
                    aria-hidden="true"
                  />
                ) : (
                  <Bars3Icon
                    className="block h-6 w-6 text-black font-bold"
                    aria-hidden="true"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NavLinks.map((link: any, index: number) => (
            <Link
              href={link.href}
              className="text-white hover:text-black hover:bg-white block px-3 py-2 rounded-md text-base font-medium"
              key={index}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
