"use client"
import Cookies from "js-cookie";
const getDomain = () => {
  if (typeof window === "undefined") return undefined;
    const hostname = window.location.hostname;
    const domain = hostname.includes("quiktis.com") ? ".quiktis.com" : hostname;
    return domain;
  
};
const cookieConfig = {
  path: "/",
  domain: getDomain(),
  sameSite: "strict" as const,
};

export const TokenService = {
  getCookie: () => {
    return Cookies.get("access_token");
  },
  setCookie: (token: string) => {
    return Cookies.set("access_token", token, {
      ...cookieConfig,
      secure: process.env.NODE_ENV === "production",
    });
  },
  removeCookie: () => {
    return Cookies.remove("access_token", cookieConfig);
  },
};
