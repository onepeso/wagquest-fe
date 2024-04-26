import moment from "moment";
import { OperatingHours } from "@/types/Common";

function isWithinOpeningHours(
  operatingHours: any,
  currentTime: string,
  date: string = moment().format("YYYY-MM-DD")
): boolean {
  if (!operatingHours) return false;

  const openTime = moment(operatingHours.open_time, "h:mm A").tz(
    moment.tz.guess()
  ); // Convert open time to local time zone
  const closeTime = moment(operatingHours.close_time, "h:mm A").tz(
    moment.tz.guess()
  ); // Convert close time to local time zone
  const currentMoment = moment(currentTime, "h:mm A"); // Convert current time to a moment object

  // Check if close time is before open time (spanning across midnight)
  if (closeTime.isBefore(openTime)) {
    closeTime.add(1, "day"); // Adjust close time to be the next day
  }

  return currentMoment.isBetween(openTime, closeTime, "hour", "[]");
}

export default isWithinOpeningHours;
