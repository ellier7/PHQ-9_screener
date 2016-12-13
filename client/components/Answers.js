import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import Submit from './Submit'

const Answers = React.createClass({
	onItemClick: function (event) {
		event.currentTarget.style.backgroundColor = 'mediumaquamarine';
	},
  render() {
    const { answer, index, questions, i, results} = this.props;
    // {console.log("RESULTS", results)}
    return (
    // const score = Object.keys(results).reduce((memo, key) => memo + results[key].value, 0);
    <div>
          <ul>
          <li
          onClick={this.props.increment.bind(this, questions, i, index)}
          >{answer}</li></ul></div>
    )
  }
});

export default Answers;

      {/*  <ButtonGroup>
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