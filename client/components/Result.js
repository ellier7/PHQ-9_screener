import React from 'react';
import AnswerChoices from './AnswerChoices'
import Submit from './Submit'
import Therapist from './Therapist'

const Result = React.createClass({
  render() {
    {console.log(">>>>>PROPSSSS", this.props)}
    const { score, therapists } = this.props
    if(score >= 10){
    return (
      <div> 
      Please see one of the following therapists
      {therapists.map((name, i) => 
        // names:{names.name}
        <Therapist 
        key={i}
        names={name.name}
        address={name.address} />
        )}
        </div>
    )
  }
  else{
    return (
      <div> Thank you for taking this questionnaire</div>
      )
  }
}
})

export default Result;