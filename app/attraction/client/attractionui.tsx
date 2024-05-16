"use client";

import AttractionHeader from "../../app-components/attraction-components/AttractionHeader";
import SaveSystem from "../../app-components/attraction-components/SaveSystem";
import ShareSystem from "../../app-components/attraction-components/ShareSystem";
import LocationUI from "../../app-components/attraction-components/LocationUI";
import DetailsUI from "@/app/app-components/attraction-components/DetailsUI";
import MapUI from "@/app/app-components/attraction-components/MapUI";
import GallerySystem from "@/app/app-components/attraction-components/GallerySystem";
import AboutAttractionUI from "@/app/app-components/attraction-components/AboutAttractionUI";
import { useEffect } from "react";
import AttractionFooter from "@/app/app-components/attraction-components/AttractionFooter";
import { useStore } from "@/app/state/useStore";

const AttractionUI = ({ params }: any) => {
  const { attraction, fetchSingleAttraction } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchSingleAttraction(params.slug);
      } catch (error) {
        console.error("Error fetching attraction:", error);
      }
    };

    fetchData();
  }, [params.slug]);

  return (
    <>
      {attraction && (
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <AttractionHeader attraction={attraction} />
          <GallerySystem attraction={attraction} />
          <section className="mt-8">
            <LocationUI attraction={attraction} />
            <div className="flex flex-col lg:flex-row justify-between mt-6">
              <section className="w-full lg:flex-grow min-w-0 flex flex-col gap-6 lg:pr-6">
                <div className="border-t-2 border-b-2">
                  <DetailsUI attraction={attraction} />
                </div>
                <section className="flex flex-col gap-3 border-b-2">
                  <MapUI attraction={attraction} />
                </section>
              </section>
              <AboutAttractionUI attraction={attraction} />
            </div>
          </section>
        </article>
      )}
      <AttractionFooter attraction={attraction} />
    </>
  );
};

export default AttractionUI;
