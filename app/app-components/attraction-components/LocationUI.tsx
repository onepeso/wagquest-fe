import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const LocationUI = ({ attraction }: any) => {
  return (
    <Card className="bg-slate-50 border border-slate-200 rounded p-4 mb-4">
      <CardContent className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0 md:space-x-8 p-0">
        <div className="flex flex-col md:flex-row md:items-center">
          <h2 className="text-xl font-bold text-gray-800 mb-1 md:mb-0 md:mr-2">
            Location:
          </h2>
          <address className="text-gray-600">
            {`${attraction?.location?.street}, ${attraction?.location?.city}, ${attraction?.location?.state}, ${attraction?.location?.zipcode}`}
          </address>
        </div>
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-bold text-gray-800">Price:</h2>
          <p className="text-lg text-green-600 font-semibold">
            ${attraction?.price}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationUI;
