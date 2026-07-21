import { NextResponse } from "next/server";
import { getLocaleUrlToRedirect } from "./app/utils/i18n";

export function middleware(request){
    const newLocaleUrl = getLocaleUrlToRedirect (request);
    
    if(newLocaleUrl){
        return NextResponse.redirect(newLocaleUrl);

    }
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};