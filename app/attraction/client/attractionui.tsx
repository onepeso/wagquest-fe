"use client";

import AttractionLogic from "../logic/attractionlogic";
import AttractionHeader from "../../app-components/attraction-components/AttractionHeader";
import SaveSystem from "../../app-components/attraction-components/SaveSystem";
import ShareSystem from "../../app-components/attraction-components/ShareSystem";
import LocationUI from "../../app-components/attraction-components/LocationUI";
import DetailsUI from "@/app/app-components/attraction-components/DetailsUI";
import MapUI from "@/app/app-components/attraction-components/MapUI";
import GallerySystem from "@/app/app-components/attraction-components/GallerySystem";
import AboutAttractionUI from "@/app/app-components/attraction-components/AboutAttractionUI";
import { useEffect, useState } from "react";
import AttractionFooter from "@/app/app-components/attraction-components/AttractionFooter";

const AttractionUI = ({ params }: any) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const attractionData = await AttractionLogic(params);
      setData(attractionData);
    };

    fetchData();
  }, [params]);

  if (!data) {
    // Render loading indicator or return null while data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <>
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AttractionHeader attraction={data} />
        <GallerySystem attraction={data} />
        <section className="mt-8">
          <LocationUI attraction={data} />
          <div className="flex flex-col lg:flex-row justify-between mt-6">
            <section className="w-full lg:flex-grow min-w-0 flex flex-col gap-6 lg:pr-6">
              <div className="border-t-2 border-b-2">
                <DetailsUI attraction={data} />
              </div>
              <section className="flex flex-col gap-3 border-b-2">
                <MapUI attraction={data} />
              </section>
            </section>
            <AboutAttractionUI attraction={data} />
          </div>
        </section>
      </article>
      <AttractionFooter attraction={data} />
    </>
  );
};

export default AttractionUI;
