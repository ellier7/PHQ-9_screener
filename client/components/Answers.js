import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import Submit from './Submit'

const Answers = React.createClass({
  // change color of button background so user can see which answer they selected
  onItemClick: function (event) {
    event.currentTarget.style.backgroundColor = 'ivory'
  },
  // call action creator once button is clicked
  incrementScore: function(questions, questionIndex, answerValue, event){
    this.props.increment(questions, questionIndex, answerValue)
    this.onItemClick(event)
  },
  render() {
    const { answer, questions, questionIndex, answerValue } = this.props
    return (
       <div className="buttons">
        <Button className="wellStyles" bsSize="large" block
        onClick={this.incrementScore.bind(this, questions, questionIndex, answerValue)}>{answer}</Button>
      </div>
    )
  }
})

export default Answers
