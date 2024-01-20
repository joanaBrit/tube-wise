
export const setToken = (tokenName: string, token: string) => {
  localStorage.setItem(tokenName, token)
}

export const getToken = (tokenName: string): string | null => {
  return localStorage.getItem(tokenName)
}

export const removeToken = (tokenName: string) => {
  return localStorage.removeItem(tokenName)
}

export const tokenuisValid = (tokenName: string) => {
  const token = getToken(tokenName)
  console.log(token)

  if (!token) {
    return false
  }

  try {
    const exp = JSON.parse(atob(token.split('.')[1])).exp
    const now = Date.now() / 1000
    console.log(exp, now)
  } catch (error) {
    
  }
}