import React from 'react'
import { Link } from 'react-router'

export default class Navbar extends React.Component {

  render () {
    return (
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
      </ul>
    )
  }

}
