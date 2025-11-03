import { NextResponse } from "next/server";
import { clerkClient, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/login", "/sign-in(.*)", "/sign-up(.*)"]);
const ALLOWED_DOMAIN = "@unitec.edu";

export default clerkMiddleware(async (auth, request) => {
  const isPublic = isPublicRoute(request);
  const authState = await auth();
  const { userId, redirectToSignIn, sessionClaims, sessionId } = authState;

  if (!userId && !isPublic) {
    return redirectToSignIn({ returnBackUrl: request.url });
  }

  if (userId) {
    const claims = (sessionClaims ?? {}) as Record<string, unknown>;
    const claimEmail = (claims.email as string | undefined) ?? null;
    const claimEmailList = (claims.email_addresses as string[] | undefined) ?? [];
    const primaryEmail = claimEmail ?? claimEmailList[0] ?? "";

    if (!primaryEmail.toLowerCase().endsWith(ALLOWED_DOMAIN)) {
      if (sessionId) {
        const client = await clerkClient();
        await client.sessions.revokeSession(sessionId);
      }
      const url = new URL("/login", request.url);
      url.searchParams.set("error", "domain");
      return NextResponse.redirect(url);
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
