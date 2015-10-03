import { makeApiRequest } from 'actions/api'

export function addPhotoOptimistic(file, id) {
  return (dispatch) => {
    const fileReader = new FileReader()
    fileReader.onloadend = ({target: {result}}) => {
      dispatch({
        type: 'ADD_PHOTO',
        payload: {
          id,
          src: result,
          location: 'LOCAL',
        }
      })
    }
    fileReader.readAsDataURL(file)
  }
}

export function commitPhoto(data, id) {
  return {
    type: 'COMMIT_PHOTO',
    payload: {
      id,
      src: `/${data.path}`,
      location: 'REMOTE',
    }
  }
}

export function uploadPhoto(formData) {
  return makeApiRequest({
      url: '/api/photos',
      method: 'post',
      fileUpload: true,
    }, {
      success: commitPhoto,
      optimistic: addPhotoOptimistic,
    },
    formData,
  )
}

