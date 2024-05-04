import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PawPrint } from "lucide-react";

const DetailsUI = ({ attraction }: any) => {
  return (
    <>
      <Alert className="bg-slate-50 border border-slate-200 px-4 py-3 rounded-md mb-4">
        <AlertTitle className="font-bold mb-1">
          Dive into the details
        </AlertTitle>
        <AlertDescription>
          This is where you'll find an in-depth breakdown of what makes this
          particular location special and unique.
        </AlertDescription>
      </Alert>

      {attraction?.data?.details?.length > 0 ? (
        <ul className="mt-4 space-y-4 px-3">
          {attraction?.data?.details?.map((detail: any, index: number) => (
            <li
              key={index}
              className={`flex flex-col md:flex-row p-4 rounded-lg ${
                index % 2 === 0 ? "bg-blue-50" : "bg-green-50"
              }`}
            >
              <strong className="font-bold text-sm mb-1 md:mb-0 md:mr-2 text-gray-80 flex gap-2 items-center">
                <PawPrint />
                {detail.detailTitle}:
              </strong>
              <span className="text-gray-700 text-sm">
                {detail.detailDescription}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-gray-600 italic">
          No details available for this attraction.
        </p>
      )}
    </>
  );
};

export default DetailsUI;
