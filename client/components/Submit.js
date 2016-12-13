import React from 'react';

const Submit = React.createClass({
  render() {
    {console.log(">>>>>PROPSSSS", this.props.results)}
    const { results } = this.props
    const score = Object.values(results).reduce((x,y) => x+y)
    return (
      <div>
      <h1>Your score is: {score}</h1>
        </div>
    )
  }
});

export default Submit;
