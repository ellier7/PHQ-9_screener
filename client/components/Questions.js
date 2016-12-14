import React from 'react'
import AnswerChoices from './AnswerChoices'

const Questions = React.createClass({
  render() {
    const { questions } = this.props
    return (
      <div>
          <h3 className="questions">{questions}</h3>
        <AnswerChoices {...this.props} />
        </div>
    )
  }
})

export default Questions
