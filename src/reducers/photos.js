import uuid from 'an-uuid'

export default function photos(state = {
  photosById: {},
}, action) {
  switch(action.type) {
  case 'ADD_PHOTO':
  case 'COMMIT_PHOTO':
    const photo = action.payload
    return {
      photosById: {
         ...state.photosById,
         [photo.id]: photo,
      }
    }
  default:
    return state
  }
}
