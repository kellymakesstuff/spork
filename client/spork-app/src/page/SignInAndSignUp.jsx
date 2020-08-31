import React from 'react'
import { Link } from 'react-router-dom'
import './SignInAndSignUp.scss'
import SignIn from '../components/shared/SignIn'
import SignUp from '../components/shared/SignUp'
import sporklogo from '../images/spork-logo.png'

export default function SignInAndSignUp() {
  return (
    <div>
      <div className="center">
        <Link to='/'>
          <img src={sporklogo} alt="spork logo" className="sporkLogo" />
        </Link>
      </div>
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    </div>
  )
}
