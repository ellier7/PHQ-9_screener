import React from 'react'
import { Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import Appointment from './Appointment'
import ThankYou from './ThankYou'
import { submitTherapists } from '../actions/actionCreators'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Therapists extends React.Component{
  renderAppointment(){
    return <Appointment />
  }
  renderTherapists() {

  }
  render() {
    console.log(">>>>SubmitTherapist", this.props.submitTherapist)
     if(this.props.submitTherapist){
      return this.renderAppointment()
    }else{
    return (
      <li>
      {this.props.names}
      {this.props.address}</li>
      )
  }
  }
}
      // <div className="buttons">
        // <Button className="wellStyles" bsSize="large" block>


const { string , func, bool } = React.PropTypes
// Prop validation
Therapists.propTypes = {
  names: string.isRequired,
  address: string.isRequired,
  submitTherapists: func.isRequired,
  submitTherapist: bool
}

function mapStateToProps(state) {
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
