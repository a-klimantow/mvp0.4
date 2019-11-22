export const setBearer = () => {
  if (localStorage.getItem("tokenData")) {
    const { token = "" } = JSON.parse(localStorage.getItem("tokenData"))
    return {
      Authorization: `Bearer ${token}`
    }
  }
}
