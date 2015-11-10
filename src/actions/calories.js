export function addCalorieGoal(description) {
  return {
    type: 'ADD_CALORIE_GOAL',
    payload: {description},
  }
}
