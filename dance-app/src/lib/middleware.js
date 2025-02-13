import { NextResponse } from "next/server";

export default function middleware(request) {
  //  we are not allowed to use cookie here, rather we have request object that contains cookies
  console.log("request", request.cookies.has("cookieToken"));
  if (
    !request.cookies.has("cookieToken") ||
    !request.cookies.has("cookieUserId") ||
    !request.cookies.has("cookieRole")
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: "/calendar/:path*",
};
