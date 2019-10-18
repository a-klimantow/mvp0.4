import axios from "axios"
import { useState, useEffect } from "react"

const server = process.env.NODE_ENV === "development" ? "staging" : "production"

axios.defaults.baseURL = `https://transparent-${server}.herokuapp.com/api/`

const getTokenData = () =>
  localStorage.getItem("tokenData")
    ? JSON.parse(localStorage.getItem("tokenData"))
    : { token: "" }

const setTokenData = data =>
  localStorage.setItem("tokenData", JSON.stringify(data))

// hooooook
export const useAxios = () => {
  const [loader, setLoader] = useState(false)

  const source = axios.CancelToken.source()

  const createHeaders = () => ({
    headers: {
      Authorization: `Bearer ${getTokenData().token}`
    },
    cancelToken: source.token
  })

  // useEffect(() => {
  //   return () => source.cancel("Operation canceled")
  // }, [])

  const auth = data => {
    setLoader(true)
    return axios
      .post("ManagingFirmUsers/auth", data)
      .then(res => res.data.successResponse)
      .then(setTokenData)
      .catch(err => console.log(err))
      .finally(() => setLoader(false))
  }

  const refresh = (method, ...rest) =>
    axios
      .post("ManagingFirmUsers/refreshToken", getTokenData())
      .then(res => res.data.successResponse)
      .then(setTokenData)
      .then(() => method(...rest))
      .catch(err => {
        console.log(err)
        localStorage.clear()
        document.location.replace("/login")
      })

  const get = (rest = "") => {
    setLoader(true)
    return (
      axios(`${rest}`, createHeaders())
        .then(res => {
          console.log("got data")
          return res.data.successResponse
        })
        // .catch(err => {
        //   if (err.response.status) {
        //     return refresh(get, rest)
        //   } else {
        //     return err
        //   }
        // })
        .catch(err => {
          if (axios.isCancel(err)) {
            console.log(err.message)
          } else {
            if (err.response.status === 401) {
              return refresh(get, rest)
            }
          }
        })
        .finally(() => setLoader(false))
    )
  }

  const post = (url, data = {}) => {
    return axios
      .post(url, data, createHeaders())
      .then(res => res.data.successResponse)
  }

  return { auth, get, loader, post, source }
}
