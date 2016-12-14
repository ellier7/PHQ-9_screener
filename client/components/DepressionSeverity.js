import React from 'react';
import AnswerChoices from './AnswerChoices'
import Submit from './Submit'
import Result from './Result'

const DepressionSeverity = React.createClass({
  render() {
    const { depressionSeverity, low, high, score, text } = this.props;
    if(score >= low && score <= high){
    return (
      <div className="levels"> Your Depression Severity is: <strong>{text}</strong>
      <Result {...this.props} />
        </div>
    )
  }
  else{
     return (
      <div>
        </div>
    )
  }
}
});

export default DepressionSeverity;