import isWithinOpeningHours from "../../../lib/operatingHoursUtils";
import ReviewSystem from "./review-system/ReviewSystem";
import SaveSystem from "./SaveSystem";
import ShareSystem from "./ShareSystem";
import { OperatingHours } from "@/types/Common";
import moment from "moment-timezone";

const AttractionHeader = ({ attraction }: any) => {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between lg:mb-4">
      <div className="mb-4 md:mb-0">
        <h1 className="flex items-center mb-2 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl">
          {attraction?.name}
        </h1>
        <p className="hidden text-sm text-gray-700 lg:block md:text-base">
          {attraction?.description}
        </p>
      </div>
      <div className="hidden gap-3 lg:flex md:gap-4">
        <ShareSystem attraction={attraction} />
        <ReviewSystem attraction={attraction} />
        <SaveSystem />
      </div>
    </header>
  );
};

export default AttractionHeader;
