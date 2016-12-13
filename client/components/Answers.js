import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const Answers = React.createClass({
	onItemClick: function (event) {
    event.currentTarget.style.backgroundColor = 'mediumaquamarine';
},
  render() {
    const { answer, index, questions, i} = this.props;
    // {console.log("INDEX", index)}
    return (
        <ButtonGroup>
    <Button
    onClick={this.props.increment.bind(this, i, index, 0)}>{answer}</Button>
  </ButtonGroup>
    )
  }
});

export default Answers;

    {/* <div>
          <ul>
          <li
          onClick={this.props.increment.bind(this, 0, i)}
          onClick={this.onItemClick}>
        </div>*/}