export function addMeal(description) {
  return {
    type: 'ADD_MEAL',
    payload: {description},
  }
}
