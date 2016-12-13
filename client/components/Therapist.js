import React from 'react';
import { Button } from 'react-bootstrap';

const Questions = React.createClass({
  render() {
    // {console.log(">>>>>PROPSSSS", this.props)}
    const { names, address } = this.props;
    return (
      <div style={{marginLeft: '10%'}}>

       <Button bsSize="large" block>{ names }<br/>{ address }</Button>
  </div>
    )
  }
});

export default Questions;