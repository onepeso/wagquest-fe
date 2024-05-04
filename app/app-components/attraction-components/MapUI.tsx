import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Map from "@/app/app-components/map/Map";

const MapUI = ({ attraction }: any) => {
  return (
    <>
      <Alert>
        <AlertTitle className="font-bold">See It In The Map</AlertTitle>
        <AlertDescription>
          We are adding directions to this location. Stay tuned!
        </AlertDescription>
      </Alert>
      <Map
        address={`${attraction?.data?.location}`}
        latitude={attraction?.data?.geopoint?.lat}
        longitude={attraction?.data?.geopoint?.lng}
      />
    </>
  );
};

export default MapUI;
