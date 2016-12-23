import React from 'react'
import Result from '../containers/Result'

const DepressionSeverity = (props) => {
  // console.log("SCOREEE", props)
    if(props.score >= props.low && props.score <= props.high){
    return (
      <div className="levels"> Your Depression Severity Level is: <strong>{props.text}</strong>
      <Result score={props.score}/>
        </div>
    )
  }
  else{
    return <div></div>
  }
}

const { number, string } = React.PropTypes
// Prop validation
DepressionSeverity.propTypes = {
  score: number.isRequired,
  low: number.isRequired,
  high: number.isRequired,
  text: string.isRequired
}

export default DepressionSeverity