import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./app-components/Navigation";
import { ClerkProvider, clerk } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Paw Adventures",
  description:
    "Explore a world of dog-friendly locations and experiences with PawAdventures. Find the perfect dog parks, trails, cafes, and more. Connect with fellow dog owners and embark on new adventures with your furry friend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navigation />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
