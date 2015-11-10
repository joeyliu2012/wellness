import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addCalorieGoal } from 'actions/calories'
import { Link } from 'react-router'

function mapStateToProps(state) {
  return state.meals
}

const mapDispatchToProps = { addCalorieGoal }

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class CalorieGoal extends Component {

  static propTypes = {
    addMeal: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      caloriegoalDescription: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addMeal(this.state.caloriegoalDescription)
    this.state.mealDescription = null
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
               onChange={(evt) => {
                 this.setState({caloriegoalDescription: evt.target.value})
               }} value={this.state.caloriegoalDescription} placeholder="Enter calories:"
        />
        <button type="submit">Add calories</button>
      <Link to ="/home">Return to home</Link>
      </form>
    )
  }
}
