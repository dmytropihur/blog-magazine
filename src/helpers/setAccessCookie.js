export const setAccessCookie = (token, a_exp) => {
  const nowAccess = new Date();
  const timeAccess = nowAccess.getTime();
  const expireAccessTime = timeAccess + a_exp;
  nowAccess.setTime(expireAccessTime);
  document.cookie = `accessToken=${token}; expires=${nowAccess.toUTCString()}`;
};
