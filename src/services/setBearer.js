export const setBearer = () => {
  const token = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData")).token
    : ""
  return {
    Authorization: `Bearer ${token}`
  }
}
