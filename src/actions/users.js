import api from 'utils/api'

import { CREATE_USER, USER_CREATED } from 'constants/action-types'

export function createUser() {
  return {
    type: CREATE_USER,
  }
}

export function userCreated(user) {
  return {
    type: USER_CREATED,
    payload: user,
  }
}

export function createUserInDatabase(email, password, fullName) {
  return (dispatch) => {
    dispatch(createUser())
    api.post('/users', {email, password, fullName})
       .then((resp) => resp.data.user)
       .then((user) => dispatch(userCreated(user)))
       .catch((err) => console.error(err))
  }
}
