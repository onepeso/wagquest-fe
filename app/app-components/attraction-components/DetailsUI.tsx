import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PawPrint } from "lucide-react";

const DetailsUI = ({ attraction }: any) => {
  return (
    <>
      <h3 className="scroll-m-20 my-8 text-2xl font-semibold tracking-tight">
        What this place offers
      </h3>
      {attraction?.details?.length > 0 ? (
        <div className="mt-2 mb-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {attraction?.details?.map((detail: any, index: number) => (
            <div key={index} className="flex flex-col md:flex-row rounded-lg">
              <p className="text-base mb-1 md:mb-0 md:mr-2 text-gray-80 flex gap-2 items-center">
                <PawPrint />
                {detail.detailTitle}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-gray-600 italic">
          No details available for this attraction.
        </p>
      )}
    </>
  );
};

export default DetailsUI;
