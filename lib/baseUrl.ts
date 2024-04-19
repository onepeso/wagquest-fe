const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_PROD_API_URL
    : process.env.NEXT_PUBLIC_DEV_API_URL;

export default baseUrl;
