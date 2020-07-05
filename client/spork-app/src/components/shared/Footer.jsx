import React from 'react'
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/about"><h4 className="its-us">About the Team</h4></Link>
    </div>
  )
}
