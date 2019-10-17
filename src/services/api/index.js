import axios from 'axios'

export class Api {
  constructor() {
    this.method = axios.create({
      baseURL: 'https://transparent-staging.herokuapp.com/api/',
      headers: {
        Authorization: `Bearer ${this.TokenData.token}`
      }
    })
  }

  get = url =>
    this.method(url)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      .finally(() => console.log('finaly'))

  get TokenData() {
    return localStorage.getItem('tokenData')
      ? JSON.parse(localStorage.getItem('tokenData'))
      : { token: '' }
  }

  set TokenData(data) {
    this.token = 'hello'
  }
}
