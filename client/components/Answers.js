import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import Submit from './Submit'

const Answers = React.createClass({
	onItemClick: function (event) {
		event.currentTarget.style.backgroundColor = 'ivory';
  },
  incrementScore: function(questions, i, index, answerID, event){
    this.props.increment(questions, i, index, answerID)
    this.onItemClick(event)
	},
  render() {
    const { answer, index, questions, i, results, answerID} = this.props;
    return (
       <div className="buttons">
    <Button className="wellStyles" bsSize="large" block
    onClick={this.incrementScore.bind(this,questions, i, index, answerID)}>{answer}</Button>
  </div>
    )
  }
});

export default Answers;