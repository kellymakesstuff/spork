import React, { Component } from 'react'
import sporkLogo from '../../images/spork-logo.png'
import "../../css/Main.css"

export default class Header extends Component {
  render() {
    return (
      <div className="headerDiv">
        <img src={sporkLogo} alt="spork logo" className="sporkLogo" />
        <div>

          <p className="headerText">Find a recipe</p>
          <p className="headerText2"> or </p>
          <p className="headerText3">Missing an ingredient?</p>
          <p className="headerText3">Find a substitute</p>


        </div>
      </div>
    )
  }
}
