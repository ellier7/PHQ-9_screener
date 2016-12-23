import React, { Component } from 'react'
import { connect } from 'react-redux'

import Questionnaire from './Questionnaire'
import Appointment from './Appointment'

class App extends Component {
  render () {
    if (this.props.submitTherapist) {
      return <Appointment />
    } else {
      return <Questionnaire />
    }
  }
}

const { bool } = React.PropTypes

App.propTypes = {
  submitTherapist: bool
}

function mapStateToProps (state) {
  return {
    submitTherapist: state.results.submitTherapist
  }
}

export default connect(mapStateToProps)(App)
