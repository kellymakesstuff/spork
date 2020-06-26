import React from 'react'
import { withRouter, Link, Route } from "react-router-dom"

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/about"><h4>About the Team</h4></Link>
    </div>
  )
}
