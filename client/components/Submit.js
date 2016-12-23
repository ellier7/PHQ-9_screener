import React, { Component } from 'react'
import { connect } from 'react-redux'
import DepressionSeverity from './DepressionSeverity'

class Submit extends Component {
  render () {
    const { depressionSeverity } = this.props
    const score = Object.values(this.props.results).reduce((x, y) => {
      if (typeof x === 'number' && typeof y === 'number') {
        return x + y
      }
      return x
    })
    return (
      <div className='score'><strong>Your scored a {score} out of 27</strong>
        {depressionSeverity.map((range, i) => {
          return <DepressionSeverity
            key={i}
            text={range.text}
            score={score}
            low={range.low}
            high={range.high}
        />
        })
    }
      </div>
    )
  }
}

const { object, array } = React.PropTypes

Submit.propTypes = {
  results: object,
  depressionSeverity: array
}

function mapStateToProps (state) {
  return {
    results: state.results,
    depressionSeverity: state.depressionSeverity
  }
}

export default connect(mapStateToProps)(Submit)
