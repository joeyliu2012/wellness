import axios from 'axios'

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
}

const PREFIX = process.browser ? '/api' : '//localhost:3000/api'

const api = {
  delete(path, data) {
    return this.request('delete', path, data, null)
  },

  get(path, data) {
    return this.request('get', path, null, data)
  },

  patch(path, data) {
    return this.request('patch', path, data, null)
  },

  post(path, data) {
    return this.request('post', path, data, null)
  },

  put(path, data) {
    return this.request('put', path, data, null)
  },

  request(method, path, data, params) {
    return axios({
      url: `${PREFIX}${path}`,
      method,
      headers: {
        ...DEFAULT_HEADERS,
      },
      params,
      data,
    })
  },
}

export default api
