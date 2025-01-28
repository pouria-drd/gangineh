// import { getSession } from "./actions/v1";
import { NextResponse, type NextRequest } from "next/server";

// const isAdminRoute = (pathname: string) => pathname.startsWith("/admin");

async function Middleware(request: NextRequest) {
    const redirectUrl = new URL("/auth/login", request.url);
    redirectUrl.searchParams.set("next", request.url); // Preserve the original URL in the 'next' parameter

    try {
        // const user: User | null = await getSession();

        // Redirect to login if the user is not authenticated
        // if (user === null) {
        //     return NextResponse.redirect(redirectUrl, { status: 303 });
        // }

        // Restrict access to admin routes for non-admin users
        // if (isAdminRoute(request.nextUrl.pathname) && !user.isAdmin) {
        //     return NextResponse.redirect(redirectUrl, { status: 303 });
        // }
        // console.log("Middleware");
        // Allow the request to proceed if all checks pass
        return NextResponse.next();
    } catch (error) {
        if (process.env.NODE_ENV === "development") {
            console.error("Middleware error:", error);
        }

        return NextResponse.redirect(new URL("/", request.url), {
            status: 500,
        });
    }
}

export default Middleware;

// Apply middleware to specific routes only
export const config = {
    matcher: ["/admin/:path*", "/panel/:path*"],
};
