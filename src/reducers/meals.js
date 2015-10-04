export default function meals(state = {
meals: []
}, action){
    switch (action.type) {
    case "ADD_MEAL":
      return {
        ...state,
        meals: [...state.meals, action.payload],
      }
    default:
      return state
    }
}
