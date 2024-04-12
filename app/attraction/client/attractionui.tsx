"use client";

import { useState } from "react";
import AttractionLogic from "../logic/attractionlogic";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AttractionHeader from "../../app-components/attraction-components/AttractionHeader";
import SaveSystem from "../../app-components/attraction-components/SaveSystem";
import ShareSystem from "../../app-components/attraction-components/ShareSystem";
import LocationUI from "../../app-components/attraction-components/LocationUI";
import DetailsUI from "@/app/app-components/attraction-components/DetailsUI";
import MapUI from "@/app/app-components/attraction-components/MapUI";
import GallerySystem from "@/app/app-components/attraction-components/GallerySystem";
import AboutAttractionUI from "@/app/app-components/attraction-components/AboutAttractionUI";

const AttractionUI = ({ params }: any) => {
  const { attraction } = AttractionLogic(params);

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <AttractionHeader attraction={attraction} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        <GallerySystem attraction={attraction} />
        <div className="flex gap-3 justify-center lg:hidden">
          <ShareSystem attraction={attraction} />
          <SaveSystem />
        </div>
      </div>
      <section className="mt-8">
        <LocationUI attraction={attraction} />
        <div className="flex flex-col lg:flex-row justify-between mt-6">
          <section className="w-full lg:flex-grow min-w-0 flex flex-col gap-6 lg:pr-6">
            <div>
              <DetailsUI attraction={attraction} />
            </div>
            <section className="flex flex-col gap-3">
              <MapUI attraction={attraction} />
            </section>
          </section>
          <AboutAttractionUI attraction={attraction} />
        </div>
      </section>
    </article>
  );
};

export default AttractionUI;
