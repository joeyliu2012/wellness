import API from 'utils/api'
import { USER_CREATED } from 'constants/action-types'

const api = new API()

export function createUser(userData) {
  api.post('/api/users', userData)
     .then((resp) => console.log(resp))
}
