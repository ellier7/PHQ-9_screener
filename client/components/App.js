// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import * as actionCreators from '../actions/actionCreators'
// import Main from './Main'

// function mapStateToProps(state) {
//   return {
//     questionnaire: state.questionnaire,
//     answers: state.answers,
//     results: state.results,
//     depressionSeverity: state.depressionSeverity,
//     therapists: state.therapists
//   }
// }

// function mapDispachToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch)
// }

// const App = connect(mapStateToProps, mapDispachToProps)(Main)

// export default App



// // Prop validation
// const { number, array } = React.PropTypes

// App.propTypes = {
//   answersCount: number.isRequired,
//   currentQuestion: number.isRequired,
//   questions: array.isRequired
// }
// // Access to global state properties. Use as a props.
// function mapStateToProps (state) {
//   return {
//     questions: state.questions,
//     currentQuestion: state.quiz.questionId,
//     answersCount: state.quiz.answersCount
//   }
// }
// // Connect your componet to global state object
// export default connect(mapStateToProps)(App)



import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ButtonGroup, Button } from 'react-bootstrap'

import Questionnaire from '../containers/Questionnaire'
import Submit from '../containers/Submit'


class App extends Component {
	render(){
		return(
			<Questionnaire />
			)
	}

}

// export default App


const { array, object, number , func, bool} = React.PropTypes

App.propTypes = {
  questionnaire: array,
  results: object,
  submitAnswer: bool
}

function mapStateToProps(state) {
  return {
    questionnaire: state.questionnaire,
    results: state.results,
    submitAnswer: state.results.submitAnswer
  }
}


// function mapDispatchToProps (dispatch) {
//   return bindActionCreators({
//     nextQuestion: nextQuestion
//   }, dispatch)
// }

export default connect(mapStateToProps)(App)


