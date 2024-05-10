import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Map from "@/app/app-components/map/Map";

const MapUI = ({ attraction }: any) => {
  return (
    <>
      <h3 className="scroll-m-20 my-8 text-2xl font-semibold tracking-tight">
        Where you will find this place
      </h3>
      <div className="pb-10">
        <Map
          address={`${attraction?.data?.location}`}
          latitude={attraction?.data?.geopoint?.lat}
          longitude={attraction?.data?.geopoint?.lng}
        />
      </div>
    </>
  );
};

export default MapUI;
