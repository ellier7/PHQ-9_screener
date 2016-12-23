import React, { Component } from 'react'
import { connect } from 'react-redux'
import Answers from '../components/Answers'
import ThankYou from '../components/ThankYou'

class AnswerChoices extends Component{
  displayAnswers(){
    return this.props.answers.map((answers, i) => {
          return (
            <Answers 
          key={i} 
          answerIndex={i}
          answerValue={answers.id}
          answer={answers.text}
          questions={this.props.questions}
          questionIndex={this.props.questionIndex}
          nextQuestion={this.props.nextQuestion}
          id={this.props.id}
          />
          ) 
  })
  }
    render() {
    return (
      <div>
      {this.displayAnswers()}
      </div>
    )
  }

};


const { array, string } = React.PropTypes

AnswerChoices.propTypes = {
  answers: array.isRequired
}

function mapStateToProps(state) {
  return {
    answers: state.answers
  }
}


export default connect(mapStateToProps)(AnswerChoices)

