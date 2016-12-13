import React from 'react';
import AnswerChoices from './AnswerChoices'
import Submit from './Submit'

const DepressionSeverity = React.createClass({
  render() {
    // {console.log(">>>>>PROPSSSS", this.props)}
    const { depressionSeverity, low, high, score, text } = this.props;
    if(score >= low && score <= high){
    return (
      <div> {text}
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
