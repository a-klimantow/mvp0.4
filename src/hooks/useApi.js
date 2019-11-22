import axios from "axios"
import { useHistory } from "react-router-dom"
import { saveUserData, setBearer, getTokenData } from "services"

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

export const useApi = () => {
  const { push } = useHistory()

  // authorization
  const auth = data =>
    axios
      .post("ManagingFirmUsers/auth", data)
      .then(res => res.data.successResponse)
      .then(saveUserData)
      .then(() => push("/tasks"))

  const logout = () => {
    return axios.post("ManagingFirmUsers/logout")
  }

  // refreshToken
  const refresh = config =>
    axios
      .post("ManagingFirmUsers/refreshToken", getTokenData())
      .then(res => res.data.successResponse)
      .then(res => localStorage.setItem("tokenData", JSON.stringify(res)))
      .then(() => {
        console.log("get & set refresh")
        return axios({
          ...config,
          headers: { ...config.headers, ...setBearer() }
        })
      })
      .catch(() => push("/login"))

  // method GET
  const getData = url =>
    axios
      .get(url, { headers: setBearer() })
      .then(res => res.data.successResponse)
      .catch(e => {
        if (e.response.status === 401) {
          console.log("to refresh")
          return refresh(e.config)
        }
      })

  return { auth, logout, getData }
}
