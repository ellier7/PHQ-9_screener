import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div className="main">
         <h1 className="title">PHQ-9 Depression Screener</h1>
        <h3 className="warning">Please answer all questions before submitting<br/></h3>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
});

export default Main;

 // style={{...css.h1}}>
