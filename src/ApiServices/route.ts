export const AUTH_ENDPOINTS = {
  SIGNUP: `${BASE_URL}/auth/signup`,
  LOGIN: `${BASE_URL}/auth/login`,
  VERIFY_EMAIL: `${BASE_URL}/auth/verify-email`,
  REFRESH_TOKEN: `${BASE_URL}/auth/refresh-token`,
  FORGOT_PASSWORD: `${BASE_URL}/auth/initiate-reset-password`,
  RESET_PASSWORD: `${BASE_URL}/auth/reset-password`,
  INITIATE_GOOGLE: `${BASE_URL}/auth/google/initiate`,
  GOOGLE_CALLBACK: `${BASE_URL}/auth/google/callback`,
  LOGOUT:`${BASE_URL}/auth/logout`,
  LOGOUT_ALL: `${BASE_URL}/auth/logout-all`,
};