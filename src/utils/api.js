export default class API {
  constructor() {

  }

  request(method, uri, body, params, headers) {
    return fetch(this.addQueryParams(uri, params), {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    })
      .then((resp) => {
        if (resp.status >= 200 && resp.status < 300) {
          return Promise.resolve(resp)
        } else {
          return Promise.reject(resp)
        }
      })
      .then((resp) => resp.json())
  }

  static addQueryParams(uri, params) {
    const paramString = Object.keys(params)
                               .map((key) => [key, params[key]])
                               .map((pair) => pair.join('='))
                               .join('&')
    console.log({paramString})
    return [uri, paramString].join('?')
  }
}

window.API = API
