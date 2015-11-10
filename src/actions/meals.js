import { makeApiRequest } from 'actions/api'
import { ADDED_NEW_MEAL } from 'constants/action-types'

function addedNewMeal(){
  return (dispatch) => {
    dispatch({
      type: ADDED_NEW_MEAL,
    })
    dispatch(pushState({}, '/home'))
  }
}

export function addNewMeal(user, description, timestamp){
  return makeApiRequest({
    url: '/api/meals',
    method: 'post',
  }, {
    success: addedNewMeal,
  }, {
    user,
    description,
    timestamp,
  })
}
