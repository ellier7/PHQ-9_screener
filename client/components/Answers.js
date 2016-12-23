import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ButtonGroup, Button } from 'react-bootstrap'
import Submit from '../containers/Submit'
import { increment, nextQuestion } from '../actions/actionCreators'
import ThankYou from './ThankYou'

class Answers extends Component{
  onItemClick(event) {
    event.currentTarget.style.backgroundColor = 'red'
  }

  incrementScore(questionIndex, answerValue){
    this.props.increment(questionIndex, answerValue)
    // console.log("INCREMENTSCOREPROPS", this.props)
    // this.props.nextQuestion(event)
    // this.onItemClick(event)
  }

  render() {
    const { answer, questions, questionIndex, answerValue } = this.props
     // console.log("ANSWERS", this.props)
    return (
     <div className="buttons">
        <Button className="wellStyles" bsSize="large" block
        onClick={this.incrementScore.bind(this, this.props.questionIndex, this.props.answerValue)}>{this.props.answer}</Button>
      </div>
      )
  }
}
//{this.incrementScore.bind(this, questions, questionIndex, answerValue)}


const { string, number, func} = React.PropTypes

Answers.propTypes = { 
  // answer: strng.isRequired,
  answerValue: number.isRequired,
  increment: func.isRequired
}

function mapStateToProps (state) {
  return {
    answers: state.answers
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    increment: increment
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Answers)






// import React from 'react'

// const Answers = (props) => (
//       <div>
//       {props.answer}
//         </div>
//     )

// const { string } = React.PropTypes

// Answers.propTypes = {
//   answer: string.isRequired
// }

// export default Answers




