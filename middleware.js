import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const publicPaths = ["/", "/about", "/episodes", "/contact"];

function isPublic(path) {
  return publicPaths.find((x) =>
    path.match(new RegExp(`^${x}$`))
  );
}

export default withClerkMiddleware((req) => {
  if (isPublic(req.nextUrl.pathname)) {
    return NextResponse.next();
  }
  // if the user is not signed in redirect them to the sign in page.
  const { userId } = req.auth;
  if (!userId) {
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signInUrl);
  }
  return NextResponse.next();
});

export const config = {
  matcher: '/((?!_next/image|_next/static|favicon.ico).*)',
}; 