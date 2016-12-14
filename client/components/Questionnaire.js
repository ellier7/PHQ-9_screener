import React from 'react'
import { Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import Questions from './Questions'


const Questionnaire = React.createClass({
    onSubmit: function(e) {
    e.preventDefault()
    browserHistory.push('/results')
  },
  resultLength: function(){
    return Object.keys(this.props.results).length !== 9
  },
  render() {
    return (
        <div className="main">
          <h1 className="title">PHQ-9 Depression Screener</h1>
          <h3 className="warning">Please answer all questions before submitting<br/></h3>

      <div className="description">Over the last two weeks, how often have you been bothered by any of the following problems?
        {this.props.questionnaire.map((questions, i) => 
        <Questions 
        	{...this.props} 
        	key={i} 
          questionIndex={i} 
        	questions={questions.question}
          />
          )}
        <form onSubmit={this.onSubmit} className="MyForm">
          <Button bsSize="large" type="submit" disabled={this.resultLength()}>Submit</Button>
        </form>
      </div>
      </div>
    )
  }
})

export default Questionnaire
