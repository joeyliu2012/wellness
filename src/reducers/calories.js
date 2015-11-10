export default function calories(state = {
  calories: [],
}, action) {
  switch (action.type) {
  case 'ADD_CALORIE_GOAL':
    return {
      ...state,
      calories: [...state.calories, action.payload],
    }
  default:
    return state
  }
}
