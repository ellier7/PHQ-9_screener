import React from 'react'

import AnswerChoices from './AnswerChoices'

const Questions = (props) => {
  return (
    <div>
      <h3 className='questions'>{props.questions}</h3>
      <AnswerChoices
        questions={props.questions}
        questionIndex={props.questionIndex}
        />
    </div>
  )
}

const { string } = React.PropTypes

Questions.propTypes = {
  questions: string.isRequired
}

export default Questions
