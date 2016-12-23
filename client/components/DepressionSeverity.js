import React from 'react'
import Result from './Result'

const DepressionSeverity = (props) => {
  if (props.score >= props.low && props.score <= props.high) {
    return (
      <div className='levels'> Your Depression Severity Level is: <strong>{props.text}</strong>
        <Result score={props.score} />
      </div>
    )
  } else {
    return <div />
  }
}

const { number, string } = React.PropTypes

DepressionSeverity.propTypes = {
  score: number.isRequired,
  low: number.isRequired,
  high: number.isRequired,
  text: string.isRequired
}

export default DepressionSeverity
