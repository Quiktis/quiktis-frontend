import Cookies from "js-cookie";
const getDomain = () => {
  const hostname = window.location.hostname;
  return hostname.includes("quiktis.com") ? ".quiktis.com" : hostname;
};
const cookieConfig = {
  path: "/",
  domain: process.env.NODE_ENV === "production" ? ".quiktis.com" : undefined,
  sameSite: "strict" as const,
};

export const TokenService = {
  getCookie: () => {
    return Cookies.get("qkt_access_token");
  },
  setCookie: (token: string) => {
    return Cookies.set("qkt_access_token", token, {
      ...cookieConfig,
      secure: process.env.NODE_ENV === "production",
    });
  },
  removeCookie: () => {
    return Cookies.remove("qkt_access_token", cookieConfig);
  },
};