import React, { Component } from 'react'
import FormInput from './FormInput'
import Button from './Button'
import "../../css/SignIn.scss"
import { auth, signInWithGoogle } from '../../firebase/firebase'

export default class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({
        email: '',
        password: ''
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="sign-in">
        <h2 className="">I already have an account</h2>
        <span>Sign In with you email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required />

          <div className="buttons">
            <Button type="submit" >Sign In</Button>
            <Button type ="button" onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
              </Button>
          </div>
        </form>

      </div>
    )
  }
}
