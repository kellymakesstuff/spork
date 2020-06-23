import React from 'react'
import sporkLogo from '../../images/spork-logo.png'
import "../../css/condensedHeader.css"


export default function CondensedHeader() {

  return <div>
    <img src={sporkLogo} alt="spork logo" className="sporkLogo" />
  </div>
}
