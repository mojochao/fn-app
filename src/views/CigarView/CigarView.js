import React from 'react'

export default class CigarView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <h2>Cigar View</h2>
        <h3>{this.props.params.id}</h3>
      </div>
    )
  }
}
