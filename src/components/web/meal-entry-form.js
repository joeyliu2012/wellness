import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addMeal} from 'actions/meals'

@connect(
  (state) => state.meals,
  {addMeal}
)
export default class MealEntryForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      mealDescription: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt){
    evt.preventDefault()
    this.props.addMeal(this.state.mealDescription)

  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}> <input type="text" onChange={(evt) => {
        this.setState({mealDescription: evt.target.value})
      }}placeholder="Enter a meal:"/>
      <button type="submit">Add meal</button>
       </form>
    )

  }
}
