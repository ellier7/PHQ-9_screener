import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import { increment } from '../actions/actionCreators'

class Answers extends Component {
  onItemClick (event) {
    event.currentTarget.style.backgroundColor = 'red'
  }

  incrementScore (questionIndex, answerValue) {
    this.props.increment(questionIndex, answerValue)
  }

  render () {
    const { answer, questionIndex, answerValue } = this.props
    return (
      <div className='buttons'>
        <Button className='wellStyles' bsSize='large' block
          onClick={this.incrementScore.bind(this, questionIndex, answerValue)}>
          {answer}
        </Button>
      </div>
    )
  }
}

const { number, func } = React.PropTypes

Answers.propTypes = {
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

