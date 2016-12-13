import React from 'react';
import DepressionSeverity from './DepressionSeverity'

const Submit = React.createClass({
  render() {
    {console.log(">>>>>PROPSSSS", this.props)}
    const { results } = this.props
    const score = Object.values(results).reduce((x,y) => x+y)
    return (
      <div>
      <h1>Your score is: {score}</h1>
      {this.props.depressionSeverity.map((range, i) =>
        <DepressionSeverity 
        {...this.props}
        key={i}
        text={range.text}
        score={score}
        low={range.low}
        high={range.high}
        />
      )
    }
        </div>
    )
  }
});

export default Submit;

 // {if(score >= range.low && score <= range.high) {
