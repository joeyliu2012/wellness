export function addMeal(mealDescription){
  return{
    type: "ADD_MEAL",
    payload: {description: mealDescription}
  }
}
