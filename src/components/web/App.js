import React, { Component } from 'react'

export default class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      message: null,
    }
  }

  componentDidMount() {
    fetch('/api/test')
      .then((req) => req.json())
      .then((data) => {
        this.setState({message: data.message})
      })
  }

  render() {
    return (
      <div>
        <p>
          Welcome to React!
        </p>
        <p>
          To get started, edit src/main.web.js
        </p>
        <pre>API message: {this.state.message}</pre>
      </div>
    )
  }
}
