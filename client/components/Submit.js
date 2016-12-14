import React from 'react'
import DepressionSeverity from './DepressionSeverity'

const Submit = React.createClass({
  render() {
    const { results } = this.props
    const score = Object.values(results).reduce((x,y) => x+y)
    
    return (
      <div className="score"><strong>Your scored a {score} out of 27</strong>
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
})

export default Submit