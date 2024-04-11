import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LocationUI = ({ attraction }) => {
  return (
    <Card className="flex flex-col sm:flex-row sm:justify-between items-center bg-slate-50 pr-4">
      <CardContent className="p-5 flex items-center gap-1">
        <h2 className="text-xl font-bold text-gray-900">Location:</h2>
        <address className="text-gray-700">
          {`${attraction?.location?.street}, ${attraction?.location?.city}, ${attraction?.location?.state}, ${attraction?.location?.zipcode}`}
        </address>
      </CardContent>
      <CardContent className="flex items-center gap-2 p-5">
        <h2 className="text-xl font-bold text-gray-900">Price:</h2>
        <p className="text-gray-700">${attraction?.price}</p>
      </CardContent>
    </Card>
  );
};

export default LocationUI;
