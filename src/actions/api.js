import uuid from 'an-uuid'
import axios from 'axios'
import { START_REQUEST, COMPLETE_REQUEST } from 'constants/action-types'
import { AUTH_HEADER } from 'constants/headers'

const DEFAULT_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

export function startRequest(id) {
  return {
    type: START_REQUEST,
    payload: id,
  }
}

export function completeRequest(id) {
  return {
    type: COMPLETE_REQUEST,
    payload: id,
  }
}

export function makeApiRequest(requestConfig, actionCreators, _data) {
  return (dispatch, getState) => {
    const REQUEST_ID = uuid()
    const TOKEN = getState().auth.token

    // Set actionCreators
    const {
      start,
      optimistic,
      success,
      error,
      end,
    } = actionCreators

    // Request starts...
    dispatch(startRequest(REQUEST_ID))
    start && dispatch(start(REQUEST_ID))
    optimistic && dispatch(optimistic(_data, REQUEST_ID))

    let headers
    if (requestConfig.fileUpload && TOKEN) {
      headers = {[AUTH_HEADER]: TOKEN}
      const fd = new FormData()
      fd.append('file', _data)
      _data = fd
    } else {
      headers = TOKEN ? {...DEFAULT_HEADERS, [AUTH_HEADER]: TOKEN } : DEFAULT_HEADERS
    }


    axios({
      url: requestConfig.url,
      method: requestConfig.method || 'get',
      params: requestConfig.method === 'get' ? _data : null,
      data: requestConfig.method !== 'get' ? _data : null,
      headers,
    }).then(({data}) => {
      // Successful request completion
      success && dispatch(success(data, REQUEST_ID))
      end && dispatch(end(REQUEST_ID))
      dispatch(completeRequest(REQUEST_ID))
    })
    .catch((err) => {
      // Failure request completion
      error && dispatch(error(err, REQUEST_ID))
      end && dispatch(end(REQUEST_ID))
      dispatch(completeRequest(REQUEST_ID))
    })
  }
}
