import axios from 'axios'
const BaseUrl = process.env.BASE_URL
const Provider = axios.create({
  baseURL: `${BaseUrl}/api/`,
  timeout: 10000,
})
Provider.interceptors.response.use(
  (res) => {
    console.log('inters', res)
  },
  (err) => {
    if (err.response.status === 401 || err.response.status === 403) {
      // window.location.href = '/auth/sign-in'
      window.$nuxt.$toast.open({
        message: 'Ошибка авторизации',
        type: 'error',
      })
      window.$nuxt.$router.push('/auth/sign-in')
    }
    throw err
  }
)
export { Provider, BaseUrl }
