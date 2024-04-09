"use client";

import { useState } from "react";
import AttractionLogic from "../logic/attractionlogic";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Map from "../../app-components/Map";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const AttractionUI = ({ params }) => {
  const { attraction } = AttractionLogic(params);
  const [accordionOpen, setAccordionOpen] = useState(false);

  // Get the current day (0 for Sunday, 1 for Monday, etc.)
  const currentDay = new Date().toLocaleString("en-us", { weekday: "long" });

  // Find today's operating hours
  const todaysOperatingHours = attraction?.operating_hours.find(
    (hour) => hour.day === currentDay
  );

  return (
    <>
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="flex items-end mb-3 justify-between">
          <section>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {attraction?.name}
              <span className="bg-red-500 p-1 text-white text-sm align-middle uppercase ml-3 rounded ">
                closed
              </span>
            </h1>
            <p className="text-sm md:text-lg text-gray-700">
              {attraction?.description}
            </p>
          </section>
          <section className="flex gap-3 text-sm md:text-lg">
            <p> Share </p>
            <p> Save </p>
          </section>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-3">
            {attraction?.images[0] && (
              <Image
                src={attraction?.images[0]}
                alt={attraction?.name}
                width={800}
                height={400}
                className="rounded-md h-60 md:h-fit object-cover"
              />
            )}
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-3">
            {attraction?.images
              .slice(1, 5)
              .map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={attraction?.name}
                  width={800}
                  height={400}
                  className="rounded-md h-56 md:h-full object-cover"
                />
              ))}
          </div>
        </div>
        <section className="mt-8">
          <Card className="flex flex-col md:flex-row md:justify-between items-center bg-slate-50 pr-4">
            <CardContent className="p-5 flex items-center gap-1">
              <h2 className="text-xl font-bold text-gray-900">Location:</h2>
              <address className="text-gray-700">{`${attraction?.location?.street}, ${attraction?.location?.city}, ${attraction?.location?.state}, ${attraction?.location?.country}`}</address>
            </CardContent>
            <CardContent className="flex items-center gap-2 p-5">
              <h2 className="text-xl font-bold text-gray-900">Price:</h2>
              <p className="text-gray-700">${attraction?.price}</p>
            </CardContent>
          </Card>
          <section className="flex flex-col md:flex-row justify-between mt-6">
            <section className="w-fit flex flex-col gap-6">
              <div>
                <Alert>
                  <AlertTitle className="font-bold">
                    Dive into the details
                  </AlertTitle>
                  <AlertDescription>
                    This is where you'll find an in-depth breakdown of what
                    makes this particular location special and unique.
                  </AlertDescription>
                </Alert>
                {attraction?.offers?.length > 0 ? (
                  <ul>
                    {attraction?.offers?.map((offer, index) => (
                      <li key={index}>
                        <strong>{offer.name}:</strong> {offer.description}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="p-3">
                    No details available for this attraction.
                  </p>
                )}
              </div>

              <section className="flex flex-col gap-3">
                <Alert>
                  <AlertTitle className="font-bold">
                    See It In The Map
                  </AlertTitle>
                  <AlertDescription>
                    We are adding directions to this location. Stay tuned!
                  </AlertDescription>
                </Alert>
                <Map
                  address={`${attraction?.name}, ${attraction?.location?.city}, ${attraction?.location?.state}, ${attraction?.location?.country}`}
                  latitude={attraction?.location?.latitude}
                  longitude={attraction?.location?.longitude}
                />
              </section>
            </section>
            <Card className="w-96 bg-slate-50">
              <CardHeader className="">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  About {attraction?.name}
                </h2>
                <div className="hidden md:flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`text-xl ${
                        index < (attraction?.rating ?? 0)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
                <p>
                  Welcome to Furry Fun Park, the ultimate destination for you
                  and your furry companion to play, explore, and create
                  unforgettable memories together. Nestled in the heart of
                  [Location], Furry Fun Park offers a haven for dogs of all
                  sizes to unleash their energy and embark on exciting
                  adventures.
                </p>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <section>
                  <h2 className="text-lg font-bold text-gray-900 mb-2">
                    Operating Hours
                  </h2>
                  <ul className="text-gray-700">
                    <li>
                      {todaysOperatingHours
                        ? `${todaysOperatingHours.day}: ${todaysOperatingHours.hours}`
                        : "Operating hours for today are not available."}
                    </li>
                  </ul>
                  {attraction?.operating_hours.length > 1 && (
                    <button
                      className="text-blue-500"
                      onClick={() => setAccordionOpen(!accordionOpen)}
                    >
                      {accordionOpen ? "Hide All Hours" : "Show All Hours"}
                    </button>
                  )}
                  {accordionOpen && (
                    <ul className="text-gray-700">
                      {attraction?.operating_hours
                        .filter((hour) => hour !== todaysOperatingHours)
                        .map((hour, index) => (
                          <li key={index}>
                            {hour.day}: {hour.hours}
                          </li>
                        ))}
                    </ul>
                  )}
                </section>

                <section>
                  <h2 className="text-lg font-bold text-gray-900 mb-2">
                    Social Media
                  </h2>
                  <ul className="text-gray-700">
                    {attraction?.social_media_stack.map(
                      (socialMedia, index) => (
                        <li key={index}>
                          <a
                            href={socialMedia.handle}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {socialMedia.platform}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </section>
              </CardContent>
            </Card>
          </section>
        </section>
      </article>
    </>
  );
};

export default AttractionUI;
