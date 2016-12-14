import React from 'react'
import { Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'

const Therapists = React.createClass({
  onSubmit: function(e) {
    e.preventDefault()
    browserHistory.push('/appointment')
  },
  render() {
    const { names, address } = this.props
    return (
      <div className="buttons">
        <Button className="wellStyles" bsSize="large" block
        onClick={this.onSubmit}>{ names }<br/>{ address }</Button>
      </div>
      )
  }
})

export default Therapists
