import React, { Component } from 'react'
import { connect } from 'react-redux'
import Therapist from './Therapist'
import ThankYou from './ThankYou'

class Result extends Component {
  render () {
     // console.log("RESULT PAGE", this.props)
    const { therapists } = this.props
    if (this.props.score >= 10) {
      return (
        <div className='therapistInfo'>
      Please select one of the following therapists to book an appointment:
      {therapists.map((name, i) =>
        <Therapist
          key={i}
          names={name.name}
          address={name.address}
        />
        )}
        </div>
      )
    } else {
      return (
        <div>
          <ThankYou />
        </div>
      )
    }
  }
}

const { array } = React.PropTypes

Result.propTypes = {
  therapists: array.isRequired
}

function mapStateToProps (state) {
  return {
    therapists: state.therapists
  }
}

export default connect(mapStateToProps)(Result)
