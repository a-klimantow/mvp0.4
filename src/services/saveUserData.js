export const saveUserData = data => {
  const { token, refreshToken, roles } = data
  localStorage.setItem(
    "tokenData",
    JSON.stringify({
      token,
      refreshToken
    })
  )
  localStorage.setItem("roles", JSON.stringify(roles))
}
