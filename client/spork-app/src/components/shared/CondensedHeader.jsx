import React from 'react'
import { Link } from "react-router-dom"
import sporkConLogo from '../../images/spork-logo.png'
import "../../css/condensedHeader.css"


export default function CondensedHeader() {

  return <div>
    <Link to="/" exact><img src={sporkConLogo} alt="spork logo" className="sporkConLogo" /></Link>

  </div>
}
