export default class API {
  constructor(headers = {}) {
    this.headers = headers
  }

  delete(uri, data) {
    return this.request('delete', uri, data, null, this.headers)
  }

  get(uri, data) {
    return this.request('get', uri, null, data, this.headers)
  }

  patch(uri, data) {
    return this.request('patch', uri, data, null, this.headers)
  }

  post(uri, data) {
    return this.request('post', uri, data, null, this.headers)
  }

  put(uri, data) {
    return this.request('put', uri, data, null, this.headers)
  }

  request(method, uri, body, params, headers) {
    return fetch(API.addQueryParams(uri, params), {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    })
      .then((resp) => {
        if (resp.status >= 200 && resp.status < 300) {
          return Promise.resolve(resp)
        }
        return Promise.reject(resp)
      })
      .then((resp) => resp.json())
  }

  addHeaders(newHeaders) {
    this.headers = {
      ...this.headers,
      ...newHeaders,
    }
  }

  static addQueryParams(uri, params) {
    if (!params) return uri
    return [
      uri,
      Object.keys(params)
            .map((key) => [key, params[key]].join('='))
            .join('&'),
    ].join('?')
  }
}
