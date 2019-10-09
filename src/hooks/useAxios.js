import axios from 'axios'
import { useState, useEffect } from 'react'

const getTokenData = () => {
  return localStorage.getItem('tokenData')
    ? JSON.parse(localStorage.getItem('tokenData'))
    : { token: {} }
}

const setTokenData = data => {
  return localStorage.setItem(
    'tokenData',
    JSON.stringify(data.data.successResponse)
  )
}

axios.defaults.baseURL = `https://transparent-staging.herokuapp.com/api/`

export const useAxios = () => {
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    return () => console.log('cancaltoken')
  }, [])

  const auth = (data, cb) => {
    setLoader(true)
    return axios
      .post('ManagingFirmUsers/auth', data)
      .then(setTokenData)
      .catch(err => console.log(err))
      .finally(() => setLoader(false))
  }

  const refresh = (method, ...rest) =>
    axios
      .post('ManagingFirmUsers/refreshToken', getTokenData())
      .then(setTokenData)
      .then(() => method(...rest))
      .catch(err => {
        console.log(err)
        localStorage.clear()
        document.location.replace('/login')
      })

  const get = (rest = '') => {
    setLoader(true)
    return axios(`Tasks/${rest}`, {
      headers: { Authorization: `Bearer ${getTokenData().token}` }
    })
      .then(res => res.data.successResponse)
      .catch(e => {
        console.log('to refresh')
        return refresh(get, rest)
      })
      .finally(() => setLoader(false))
  }

  return { auth, get, loader }
}
