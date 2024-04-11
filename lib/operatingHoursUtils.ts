import moment from "moment";

export const isWithinOpeningHours = (
  openTime: moment.Moment,
  closeTime: moment.Moment,
  currentTime: moment.Moment
): boolean => {
  if (closeTime.isBefore(openTime)) {
    // Closing time is on the next day
    return (
      currentTime.isBetween(openTime, moment().endOf("day")) ||
      currentTime.isBetween(moment().startOf("day"), closeTime)
    );
  } else {
    // Closing time is on the same day
    return currentTime.isBetween(openTime, closeTime);
  }
};
