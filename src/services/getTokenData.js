export const getTokenData = () => {
  const { token, refreshToken } = JSON.parse(localStorage.getItem("tokenData"))
  return { token, refreshToken }
}
