import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Map from "@/app/app-components/map/Map";

const MapUI = ({ attraction }) => {
  return (
    <>
      <Alert>
        <AlertTitle className="font-bold">See It In The Map</AlertTitle>
        <AlertDescription>
          We are adding directions to this location. Stay tuned!
        </AlertDescription>
      </Alert>
      <Map
        address={`${attraction?.name}: ${attraction?.location?.street}, ${attraction?.location?.city}, ${attraction?.location?.state}, ${attraction?.location?.zipcode} ${attraction?.location?.country}`}
        latitude={attraction?.location?.latitude}
        longitude={attraction?.location?.longitude}
      />
    </>
  );
};

export default MapUI;
