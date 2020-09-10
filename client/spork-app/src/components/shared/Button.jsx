import React from 'react'
import "./Button.scss"


  export default function Button({isGoogleSignIn, children, inverted, ...otherProps}) {
    return (
      <button
        className={`${inverted ? 'inverted' : ' '} ${isGoogleSignIn ? 'google-sign-in' : ' '} custom-button`}
        {...otherProps}
      >
        {children}
      </button>
    )
  }