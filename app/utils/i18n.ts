import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator"


export const availableLocales = ["en", "fr"];

export const defaultLocale = "fr"


export const getPreferedLocal = (request) => {
    const headers = {"accept-language" : request.headers.get("accept-language")};
    const languages = new Negotiator({headers}).language();
    return match(languages, availableLocales, defaultLocale)
}

export const getLocaleUrlToRedirect = (request) => {
    const pathName = request.nextUrl.pathname;
    const pathNameIsMissingLocale = 
    availableLocales.every((locale) =>  
        !pathName.startsWith(`/${locale}`) && pathName !== `/${locale}`);

    if(pathNameIsMissingLocale) {
        const locale = getPreferedLocal(request);

        return new URL(`/${locale}${pathName}`, request.url)

    }
}


