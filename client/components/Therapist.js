import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'react-bootstrap'

import { submitTherapists } from '../actions/actionCreators'

class Therapists extends React.Component {
  render () {
    const { submitTherapist, submitTherapists, names, address } = this.props
    if (!submitTherapist) {
      return (
        <div className='buttons'>
          <Button className='wellStyles' bsSize='large' block
            onClick={submitTherapists}>{ names }<br />{ address }</Button>
        </div>
      )
    } else {
      return (
        <div />
      )
    }
  }
}

const { string, func, bool } = React.PropTypes

Therapists.propTypes = {
  names: string.isRequired,
  address: string.isRequired,
  submitTherapists: func.isRequired,
  submitTherapist: bool
}

function mapStateToProps (state) {
  return {
    submitTherapist: state.results.submitTherapist
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    submitTherapists: submitTherapists
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Therapists)
