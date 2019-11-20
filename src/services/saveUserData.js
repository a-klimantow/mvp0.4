export const saveUserData = data => {
  localStorage.setItem("userData", JSON.stringify(data.data.successResponse))
  localStorage.setItem("roles", JSON.stringify(data.data.successResponse.roles))
}
