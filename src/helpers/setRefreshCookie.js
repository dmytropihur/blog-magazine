export const setRefreshCookie = (token, r_exp) => {
  const nowRefresh = new Date();
  const timeRefresh = nowRefresh.getTime();
  const expireRefreshTime = timeRefresh + r_exp;
  nowRefresh.setTime(expireRefreshTime);
  document.cookie = `refreshToken=${token}; expires=${nowRefresh.toUTCString()}`;
};
