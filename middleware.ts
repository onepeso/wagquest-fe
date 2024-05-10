import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/attraction(/.*)?", "/category(/.*)?"],
});

export const config = {
  matcher: [
    "/",
    "/((?!.+\\.[\\w]+$|_next).*)$",
    "/(api|trpc)(/.*)?$",
    "/attraction(/.*)?",
    "/category(/.*)?",
  ],
};
