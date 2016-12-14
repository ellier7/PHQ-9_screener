import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import Submit from './Submit'

const Answers = React.createClass({
	onItemClick: function (event) {
		event.currentTarget.style.backgroundColor = 'mediumaquamarine';
	},
  render() {
    const { answer, index, questions, i, results, answerID, selectedAnswer} = this.props;
    return (
       <div className="buttons">
    <Button className="wellStyles" bsSize="large" block
    onClick={this.props.increment.bind(this, questions, i, index, answerID)}>{answer}</Button>
  </div>
    // const score = Object.keys(results).reduce((memo, key) => memo + results[key].value, 0);
    )
  }
});

export default Answers;




      {/*  <ButtonGroup>
         <ButtonGroup>
         <Button
          onClick={this.props.increment.bind(this, questions, i, index, answerID)}>{answer}</Button>
  </ButtonGroup>


    <Button
    onClick={this.props.increment.bind(this, questions, i, index)}>{answer}
    </Button>
  </ButtonGroup>
    	{results[i]}
     <div>
          <ul>
          <li
          onClick={this.props.increment.bind(this, 0, i)}
          onClick={this.onItemClick}>
        </div>*/}