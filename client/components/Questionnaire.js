import React from 'react';
import Questions from './Questions';
import AnswerList from './AnswerList'

const Questionnaire = React.createClass({
  render() {
  	console.log(">>>PROPSS", this.props)
    return (
      <div>
        {this.props.questionnaire.map((questions, i) => 
        <Questions 
        	{...this.props} 
        	key={i} 
        	i={i} 
        	questions={questions.question} 
          score={questions.score}
        	/>
        	)}
      </div>
    )
  }
});

export default Questionnaire;
