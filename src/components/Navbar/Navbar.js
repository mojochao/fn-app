import React from 'react'
import { Link } from 'react-router'

export default class Navbar extends React.Component {

  render () {
    return (
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/404'>404</Link></li>
      </ul>
    )
  }

}
