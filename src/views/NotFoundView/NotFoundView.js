import React from 'react'
import { Link } from 'react-router'

export class NotFoundView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <h2>404 View</h2>
        <hr />
        <Link to='/'>Go to Home view</Link>
      </div>
    )
  }
}

export default NotFoundView
