import service from '~/api/http'

const authApi = {
  login: () => service.get('/auth/google'),
  logout: () => service.get('/logout'),
//   logout: (params: object) => service.get('learning-class', params),
//   registerClass: (params: object) => service.post('/join-class', params),
}

export default authApi
