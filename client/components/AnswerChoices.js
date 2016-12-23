import React, { Component } from 'react'
import { connect } from 'react-redux'

import Answers from './Answers'

class AnswerChoices extends Component {
  displayAnswers () {
    return this.props.answers.map((answers, i) => {
      return (
        <Answers
          key={i}
          answerValue={answers.id}
          answer={answers.text}
          questionIndex={this.props.questionIndex}
          />
      )
    })
  }
  render () {
    return (
      <div>
        {this.displayAnswers()}
      </div>
    )
  }

}

const { array } = React.PropTypes

AnswerChoices.propTypes = {
  answers: array.isRequired
}

function mapStateToProps (state) {
  return {
    answers: state.answers
  }
}

export default connect(mapStateToProps)(AnswerChoices)

