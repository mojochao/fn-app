import React, { PropTypes } from 'react'

export default class HistoryView extends React.Component {
  static propTypes = {
    params: PropTypes.object.isRequired()
  };

  render () {
    return (
      <div className='container text-center'>
        <h2>History View</h2>
        <h3>{this.props.params.id}</h3>
      </div>
    )
  }
}
