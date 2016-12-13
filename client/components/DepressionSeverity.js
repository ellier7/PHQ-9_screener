import React from 'react';
import AnswerChoices from './AnswerChoices'
import Submit from './Submit'
import Result from './Result'

const DepressionSeverity = React.createClass({
  render() {
    // {console.log(">>>>>PROPSSSS", this.props)}
    const { depressionSeverity, low, high, score, text } = this.props;
    if(score >= low && score <= high){
    return (
      <div> Your Depression Severity is: {text}
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

 // {this.props.depressionSeverity.map((range, i) =>
 // {if(score >= range.low && score <= range.high) {
