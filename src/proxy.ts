import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse, type NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const protectedRoutes = ["/dashboard", "/profile", "/admin"];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.includes(route)
  );

  if (isProtectedRoute) {
    const sessionToken =
      request.cookies.get("next-auth.session-token")?.value ||
      request.cookies.get("__Secure-next-auth.session-token")?.value ||
      request.cookies.get("authjs.session-token")?.value ||
      request.cookies.get("__Secure-authjs.session-token")?.value;

    if (!sessionToken) {
      const pathParts = pathname.split("/").filter(Boolean);
      const locale = ["ua", "ru", "en"].includes(pathParts[0]) ? pathParts[0] : "ua";
      const signInUrl = new URL(`/${locale}/sign-in`, request.url);
      return NextResponse.redirect(signInUrl);
    }
  }

  return intlMiddleware(request);
}

export default proxy;

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
