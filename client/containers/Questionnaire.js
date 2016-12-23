import React, {Component} from 'react'
import AnswerChoices from '../containers/AnswerChoices'
import { connect } from 'react-redux'
import { ButtonGroup, Button } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { routeActions } from 'react-router-redux'

import { browserHistory } from 'react-router'
import Questions from '../components/Questions'
import Submit from './Submit'

import { submitAnswers } from '../actions/actionCreators'

class Questionnaire extends Component {

  resultLength(){
    return Object.keys(this.props.results).length !== 9
  }

  render() {
    // console.log("SUBMIT ANSWER", this.props.submitAnswer)
    if(this.props.submitAnswer){
      return <Submit />
    }
    else{
      return (
        <div className="main">
          <h1 className="title">PHQ-9 Depression Screener</h1>
          <h3 className="warning">Please answer all questions before submitting<br/></h3>

      <div className="description">Over the last two weeks, how often have you been bothered by any of the following problems?
      {this.props.questionnaire.map((questions, i) =>
        <Questions 
          key={i} 
          questionIndex={i} 
          questions={questions.question}
          />
          )
          } 
       <form onSubmit={this.props.submitAnswers} className="MyForm">
          <Button bsSize="large" type="submit">Submit</Button>
        </form>  
        </div>
        </div>
        )
  }
}
}




const { array, object, number , func, bool} = React.PropTypes

Questionnaire.propTypes = {
  questionnaire: array.isRequired,
  results: object.isRequired,
  submitAnswers: func.isRequired,
  submitAnswer: bool
}

function mapStateToProps(state) {
  return {
    questionnaire: state.questionnaire,
    results: state.results,
    submitAnswer: state.results.submitAnswer
  }
}


function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    submitAnswers: submitAnswers
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire)




// const { string, number, func} = React.PropTypes

// Answers.propTypes = { 
//   // answer: strng.isRequired,
//   answerValue: number.isRequired,
//   increment: func.isRequired,
//   questionIndex: number
// }

// function mapStateToProps (state) {
//   return {
//     answers: state.answers,
//     questionIndex: state.
//   }
// }

// function mapDispatchToProps (dispatch) {
//   return bindActionCreators({
//     increment: increment
//   }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Answers)


