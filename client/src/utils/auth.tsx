export const isLoggedIn = () => localStorage.getItem("userToken") !== null;

export const setToken = (tokenName: string, token: string) => {
  localStorage.setItem(tokenName, token);
};

export const getToken = (tokenName: string): string | null => {
  return localStorage.getItem(tokenName);
};

export const removeToken = (tokenName: string) => {
  return localStorage.removeItem(tokenName);
};

export const isAuthenticated = () => {
  const tokenName = "userToken";
  const token = getToken(tokenName);

  if (!token) return false;

  const payload = JSON.parse(window.atob(token.split(".")[1]));
  const payloadExpiry = payload.exp;
  const now = Date.now() / 1000;
  const userID = payload.sub;

  if (payloadExpiry > now) {
    return userID;
  } else {
    return false;
  }
};
