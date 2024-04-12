import moment from "moment";
import { isWithinOpeningHours } from "../../../lib/operatingHoursUtils";
import SaveSystem from "./SaveSystem";
import ShareSystem from "./ShareSystem";

const AttractionHeader = ({ attraction }: any) => {
  const currentTime = moment(); // Get the user's current time

  const formatTime = (timeInSeconds: number) => {
    const duration = moment.duration(Number(timeInSeconds), "seconds");
    const hours = duration.hours();
    const minutes = duration.minutes();
    return moment({ hour: hours, minute: minutes });
  };

  const currentDay = currentTime.format("dddd"); // Get the current day

  // Find today's operating hours
  const todaysOperatingHours = attraction?.operating_hours.find(
    (hour: any) => hour.day === currentDay
  );

  const isOpen = todaysOperatingHours
    ? isWithinOpeningHours(
        formatTime(todaysOperatingHours.open_time),
        formatTime(todaysOperatingHours.close_time),
        currentTime
      )
    : false;

  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between lg:mb-4">
      <div className="mb-4 md:mb-0">
        <span
          className={`md:hidden flex px-2 py-1 w-fit text-xs md:text-sm uppercase font-bold tracking-wide mb-1 ${
            isOpen ? "bg-green-500" : "bg-red-500"
          } text-white rounded`}
        >
          {isOpen ? "Open" : "Closed"}
        </span>
        <h1 className="flex items-center text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {attraction?.name}
          <span
            className={`hidden md:flex ml-2 px-2 py-1 text-xs md:text-sm uppercase font-bold tracking-wide ${
              isOpen ? "bg-green-500" : "bg-red-500"
            } text-white rounded`}
          >
            {isOpen ? "Open" : "Closed"}
          </span>
        </h1>
        <p className="lg:block hidden text-sm md:text-base text-gray-700">
          {attraction?.description}
        </p>
      </div>
      <div className="lg:flex gap-3 md:gap-4 hidden">
        <ShareSystem attraction={attraction} />
        <SaveSystem />
      </div>
    </header>
  );
};

export default AttractionHeader;
