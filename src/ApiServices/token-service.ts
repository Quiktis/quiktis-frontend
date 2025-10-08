import Cookies from "js-cookie";
const getDomain = () => {
  const hostname = window.location.hostname;
  return hostname.includes("quiktis.com") ? ".quiktis.com" : hostname;
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
