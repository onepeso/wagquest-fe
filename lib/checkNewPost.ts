export function checkNewPost(publishedDate: string): boolean {
  // Parse the published date string into a Date object
  const parsedDate = new Date(publishedDate);

  // Get the current date and time in milliseconds
  const now = Date.now();

  // Calculate the difference in milliseconds between now and the published date
  const timeDifference = now - parsedDate.getTime();

  // Convert milliseconds to days (divide by 1000 milliseconds per second and 60 seconds per minute and 60 minutes per hour and 24 hours per day)
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  // Return true if the difference is less than x(amount) days, false otherwise
  return daysDifference < 7;
}
