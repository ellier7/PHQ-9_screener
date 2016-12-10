import React from 'react';
import Questionaire from './Questionaire';

const Questions = React.createClass({
  render() {
  	console.log("PROPS", this.props)
    return (
      <div className="photo-grid">
        {this.props.questions.map((questions, i) => <Questionaire {...this.props} key={i} i={i} questions={questions} />)}
      </div>
    )
  }
});

export default Questions;
