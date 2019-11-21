import axios from "axios"
import { useHistory } from "react-router-dom"
import { saveUserData, setBearer } from "services"

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

export const useApi = () => {
  const { push } = useHistory()

  const auth = data =>
    axios
      .post("ManagingFirmUsers/auth", data)
      .then(saveUserData)
      .then(() => push("/tasks"))

  const logout = () => {
    return axios.post("ManagingFirmUsers/logout")
  }

  const getData = url =>
    axios
      .get(url, { headers: setBearer() })
      .then(res => res.data.successResponse)

  return { auth, logout, getData }
}
