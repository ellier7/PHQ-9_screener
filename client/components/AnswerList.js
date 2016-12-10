import React from 'react';
import Answers from './Answers'

const AnswerList = React.createClass({
  render() {
      // console.log("ANSWERMAP", this.props)
    return (
      <div className="photo-grid">
        {this.props.answers.map((answers, i) => 
        	<Answers 
        	{...this.props} 
        	key={i} 
        	i={i} 
        	answer={answers.text} 
        	/>
        	)}
      </div>
    )
  }
});

export default AnswerList;
