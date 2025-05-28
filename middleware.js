import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    "/",
    "/about",
    "/episodes",
    "/contact",
    "/api/(.*)"],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ["/api/public"]
});

export const config = {
  // Match all request paths except for the ones starting with:
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}; 