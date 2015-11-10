import { makeApiRequest } from 'actions/api'

function addedNewMeal(){
}

export function addNewMeal(user, description, timestamp){
  return makeApiRequest({
    url: '/api/meals',
    method: 'post',
  }, {
    success: blah,
  }, {
    user,
    description,
    timestamp,
  })
}
