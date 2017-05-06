import React from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'

const CLOUDINARY_UPLOAD_PRESET = 'fq1rxfrr'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dpaa0igrr/upload'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      uploadedFileCloudinaryUrl: ''
    }
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    })

    this.handleImageUpload(files[0])
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file)

    upload.end((err, response) => {
      if (err) {
        console.error(err)
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        })
      }
    })
  }

  render() {
    return (
      <div>
        <h3 className='center'>Quad Squad NYC Signup</h3>
        <form onSubmit={ evt => {
          evt.preventDefault()
          const user = {
            name: evt.target.name.value,
            email: evt.target.email.value,
            password: evt.target.password.value,
            img: this.state.uploadedFileCloudinaryUrl
          }
          console.log('User information: ', user)
          this.props.signup(user)
        } }>
          <div className='form-group new-line'>
            <label className='control-label'>Name</label>
            <input type='text' name='name' className='form-control' />
          </div>
          <div className='form-group new-line'>
            <label className='control-label'>Email</label>
            <input type='text' name='email' className='form-control' />
          </div>
          <div className='form-group new-line'>
            <label className='control-label'>Password</label>
            <input type='password' name='password' className='form-control' />
          </div>
          <div className='form-group new-line'>
            <label className='control-label'>Password (Again)</label>
            <input type='password' className='form-control' />
          </div>
          <div className='form-group new-line'>
            <label className='control-label'>Prof Pic</label>
            <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}
                className='dropzone'>
                <p>Drop an image or click to select a file to upload.</p>
              </Dropzone>
          </div>
          <div className='center'>
            <button className='btn btn-primary signup-btn' type='submit'>Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}
