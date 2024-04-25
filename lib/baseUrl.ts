const baseUrl =
  process.env.VERCEL_ENV === "production"
    ? process.env.NEXT_PUBLIC_PROD_API_URL
    : process.env.NEXT_PUBLIC_DEV_API_URL;

export default baseUrl;

//FIXME: Other way of adding more environment variables

// if (process.env.VERCEL_ENV === "development") {
//   // Development environment
// } else if (process.env.VERCEL_ENV === "production") {
//   // Production environment
// } else if (process.env.VERCEL_ENV === "preview") {
//   // Preview environment
// }
