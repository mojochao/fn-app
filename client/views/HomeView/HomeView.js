import React from 'react'
import { connect } from 'react-redux'
import { actions as counterActions } from '../../redux/modules/counter'

export class HomeView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <h2>Home View</h2>
      </div>
    )
  }
}

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps, counterActions)(HomeView)
