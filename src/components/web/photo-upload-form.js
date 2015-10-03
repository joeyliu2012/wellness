import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { uploadPhoto } from 'actions/photos'

@connect(
  (state) => state.photos,
  { uploadPhoto },
)
export default class PhotoUploadForm extends Component {
  constructor(props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.state = {
      file: null,
    }
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    const { file } = this.state
    console.log(`Uploading file '${file && file.name}'`)
    this.props.uploadPhoto(file)
  }

  handleFileChange({target: {files}}) {
    const file = files[0]
    const reader = new FileReader()
    this.setState({file})
  }

  renderPhotos() {
    const { photosById } = this.props
    return Object.keys(photosById).map((id) => {
      const photo = photosById[id]
      return (
        <div key={id}>
          <pre>{photo.location}</pre>
          <pre>{photo.src}</pre>
          <img style={{maxWidth: 100}} src={photo.src} />
          <hr />
        </div>
      )
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <input ref="file" type="file" onChange={this.handleFileChange}/>
          </div>
          <button type="submit">Add Photo</button>
        </form>
        {this.renderPhotos()}
      </div>
    )
  }
}
