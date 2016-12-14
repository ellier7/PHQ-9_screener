import React from 'react';
import AnswerChoices from './AnswerChoices'
import Submit from './Submit'

const Questions = React.createClass({
  render() {
    const { questions, i, score} = this.props;
    return (
      <div>
          <h3 className="questions">{questions}</h3>
        <AnswerChoices {...this.props} />
        </div>
    )
  }
});

export default Questions;
