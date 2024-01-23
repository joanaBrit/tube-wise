
export const setToken = (tokenName: string, token: string) => {
  localStorage.setItem(tokenName, token)
}

// If token is found in localStorage or not
export const getToken = (tokenName: string): string | null => {
  return localStorage.getItem(tokenName)
}

export const removeToken = (tokenName: string) => {
  return localStorage.removeItem(tokenName)
}

// Token validity check
export const tokenisValid = (tokenName: string) => {
  const token = getToken(tokenName)
  console.log(token)
// if (token === null || token === undefined) return false
  if (!token) {
    return false
  }

  try {
    const exp = JSON.parse(atob(token.split('.')[1])).exp
    const now = Date.now() / 1000
    console.log(exp, now)
    return exp > now
  } catch (error) {
    console.log('Error token', token)
    return false
  }
}