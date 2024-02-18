export const isLoggedIn = () => localStorage.getItem('logged_user') !== null

export const setToken = (tokenName: string, token: string) => {
  localStorage.setItem(tokenName, token)
}

export const getToken = (tokenName: string): string | null => {
  return localStorage.getItem(tokenName)
}

export const removeToken = (tokenName: string) => {
  return localStorage.removeItem(tokenName)
}

export const isAuthenticated = () => {
  const tokenName = 'userID'
  const token = getToken(tokenName)

  if (!token) return false

  const payload = JSON.parse(window.atob(token.split('.')[1]))
  const payloadExpiry = payload.exp
  const now = Date.now() / 1000
  const userID = payload.sub

  if (payloadExpiry > now) {
    return userID
  } else {
    return false
  }
}

// Token validity check
// export const tokenisValid = (tokenName: string) => {
//   const token = getToken(tokenName)
//   console.log(token)
// if (token === null || token === undefined) return false

 // try {
  //   const exp = JSON.parse(atob(token.split('.')[1])).exp
  //   const now = Date.now() / 1000
  //   console.log(exp, now)
  //   return exp > now
  // } catch (error) {
  //   console.log('Error token', token)