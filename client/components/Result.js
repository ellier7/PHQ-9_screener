import React from 'react'
import Therapist from './Therapist'
import ThankYou from './ThankYou'

const Result = React.createClass({
  render() {
    const { score, therapists } = this.props
    if(score >= 10){
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
})

export default Result
