import service from '~/api/http'

const classApi = {
  getAvailableClasses: () => service.get('/available-classes'),
  getDetailClass: (params: object) => service.get('learning-class', params),
  registerClass: (params: object) => service.post('/join-class', params),
}

export default classApi
