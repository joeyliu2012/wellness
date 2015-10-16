import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addMeal } from 'actions/meals'
import { Link } from 'react-router'

function mapStateToProps(state) {
  return state.meals
}

const mapDispatchToProps = { addMeal }

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class MealEntryForm extends Component {

  static propTypes = {
    addMeal: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      mealDescription: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addMeal(this.state.mealDescription)
    this.state.mealDescription = null
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               onChange={(evt) => {
                 this.setState({mealDescription: evt.target.value})
               }} value={this.state.mealDescription} placeholder="Enter a meal:"
        />
        <button type="submit">Add meal</button>
      <Link to ="/home">Return to home</Link>
      </form>
    )
  }
}
