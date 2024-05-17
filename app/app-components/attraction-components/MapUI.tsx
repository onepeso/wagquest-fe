import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Map from "@/app/app-components/map/Map";
import { useEffect, useState } from "react";
import AttractionLogic from "@/app/attraction/logic/attractionlogic";

const MapUI = ({ params, attraction }: any) => {
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
      <h3 className="scroll-m-20 my-8 text-2xl font-semibold tracking-tight">
        Where you will find this place
      </h3>
      <div className="pb-10">
        <Map
          address={`${attraction?.location}`}
          latitude={attraction?.geopoint?.lat} // Use optional chaining to access geopoint property
          longitude={attraction?.geopoint?.lng}
        />
      </div>
    </>
  );
};

export default MapUI;
