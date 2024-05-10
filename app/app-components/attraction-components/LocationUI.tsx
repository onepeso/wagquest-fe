import { Card, CardContent } from "@/components/ui/card";

const LocationUI = ({ attraction }: any) => {
  return (
    <section className="border-none rounded mb-4">
      <section className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0 md:space-x-8 p-0">
        <div className="flex flex-col md:flex-row md:items-center">
          <address className="text-lg font-bold not-italic">
            {attraction?.data?.location}
          </address>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <h2 className="text-xl font-bold text-gray-800">Price:</h2>
          <p className="text-lg text-main font-semibold">
            {attraction?.data?.prices?.lowestPrice === 0 &&
            attraction?.data?.prices?.highestPrice === 0 ? (
              "Free"
            ) : (
              <span>
                ${attraction?.data?.prices?.lowestPrice} - $
                {attraction?.data?.prices?.highestPrice}
              </span>
            )}
          </p>
        </div>
      </section>
    </section>
  );
};

export default LocationUI;
