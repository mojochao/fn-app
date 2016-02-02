import React from 'react'

export default class StashView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <h2>Stash View</h2>
        <h3>{this.props.params.id}</h3>
      </div>
    )
  }
}
