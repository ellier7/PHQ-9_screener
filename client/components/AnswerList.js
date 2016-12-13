import React from 'react';
import Answers from './Answers'

const AnswerList = React.createClass({
  render() {
     // console.log("questions", this.props)
    return (
      <div className="photo-grid">
        {this.props.answers.map((answers, i) => (
        	<Answers 
        	{...this.props} 
        	key={i} 
          index={i}
        	answer={answers.text} 
          >
          
          </Answers>
          ))}
      </div>
    )
  }
});

export default AnswerList;
