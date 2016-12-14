import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import Submit from './Submit'

const Answers = React.createClass({
  onItemClick: function (event) {
    event.currentTarget.style.backgroundColor = 'ivory'
  },
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