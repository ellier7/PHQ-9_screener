import React from 'react';
import Questions from './Questions';
import Answers from './Answers'
import { ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';


const Questionnaire = React.createClass({
    onSubmit: function(e) {
    e.preventDefault()
    browserHistory.push('/results')
  },
  render() {
  	// console.log(">>>RESULTS", this.props.results)
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
        <form onSubmit={this.onSubmit} className="MyForm">
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
});

export default Questionnaire;
