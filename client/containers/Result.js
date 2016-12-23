import React, { Component } from 'react'
import { connect } from 'react-redux'
import Therapist from '../components/Therapist'
import ThankYou from '../components/ThankYou'
import { submitTherapists } from '../actions/actionCreators'
import { ButtonGroup, Button } from 'react-bootstrap'
import { bindActionCreators } from 'redux'

class Result extends Component{
  render() {
     // console.log("RESULT PAGE", this.props)
    const { score, therapists } = this.props
    if(this.props.score >= 10){
    return (
      <div className="therapistInfo"> 
      Please select one of the following therapists to book an appointment:
      {therapists.map((name, i) => 
        <Therapist 
        key={i}
        names={name.name}
        address={name.address} 
        />
        )}
      <form onSubmit={this.props.submitTherapists} className="MyForm">
          <Button bsSize="large" type="submit">Submit</Button></form>
        </div>
      )
  }else{
    return (
      <div> 
        <ThankYou />
        </div>
        )
    }
  }
}

const { array, func, bool } = React.PropTypes

Result.propTypes = {
  therapists: array.isRequired,
  submitTherapists: func.isRequired,
  submitTherapist: bool
}

function mapStateToProps(state) {
  return {
    therapists: state.therapists,
    submitTherapist: state.results.submitTherapist
  }
}



function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    submitTherapists: submitTherapists
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)
