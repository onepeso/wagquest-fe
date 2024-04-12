import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useState } from "react";
import moment from "moment";

const AboutAttractionUI = ({ attraction }: any) => {
  // Helper function to convert time format
  // TODO: Need to add this to the libs folder
  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const [accordionOpen, setAccordionOpen] = useState(false);

  // Get the current day (0 for Sunday, 1 for Monday, etc.)
  const currentDay = moment().format("dddd");

  // Find today's operating hours
  const todaysOperatingHours = attraction?.operating_hours.find(
    (hour: any) => hour.day === currentDay
  );

  return (
    <Card className="w-full lg:w-1/3 bg-slate-50 mt-6 lg:mt-0">
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          About {attraction?.name}
        </h2>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`text-xl ${
                index < (attraction?.rating ?? 0)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            >
              &#9733;
            </span>
          ))}
        </div>
        <p className="mt-4">{attraction?.content}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            Operating Hours
          </h2>
          <ul className="text-gray-700">
            <li>
              {todaysOperatingHours
                ? `${todaysOperatingHours.day}: ${formatTime(
                    todaysOperatingHours.open_time
                  )} - ${formatTime(todaysOperatingHours.close_time)}`
                : "Operating hours for today are not available."}
            </li>
          </ul>
          {attraction?.operating_hours.length > 1 && (
            <button
              className="text-blue-500 mt-2"
              onClick={() => setAccordionOpen(!accordionOpen)}
            >
              {accordionOpen ? "Hide All Hours" : "Show All Hours"}
            </button>
          )}
          {accordionOpen && (
            <ul className="text-gray-700 mt-2">
              {attraction?.operating_hours
                .filter((hour: any) => hour !== todaysOperatingHours)
                .map((hour: any, index: number) => (
                  <li key={index}>
                    {hour.day}: {formatTime(hour.open_time)} -{" "}
                    {formatTime(hour.close_time)}
                  </li>
                ))}
            </ul>
          )}
        </section>
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">Social Media</h2>
          <ul className="text-gray-700">
            {attraction?.social_media_stack.map(
              (socialMedia: any, index: number) => (
                <li key={index}>
                  <a
                    href={socialMedia.handle}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialMedia.platform}
                  </a>
                </li>
              )
            )}
          </ul>
        </section>
      </CardContent>
    </Card>
  );
};

export default AboutAttractionUI;
