import React, {Component} from 'react'
import AnswerChoices from '../containers/AnswerChoices'
import { connect } from 'react-redux'
import { ButtonGroup, Button } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { nextQuestion } from '../actions/actionCreators'


const Questions = (props) => {
      // var questionIndex = props.questionIndex
	return (
      <div>
          <h3 className="questions">{props.questions}</h3>
        <AnswerChoices
        questions={props.questions} 
        questionIndex={props.questionIndex}
        />
        </div>
        )
    }

const { func, array, string } = React.PropTypes

Questions.propTypes = {
	questions: string.isRequired
}


export default Questions
