import React from 'react';

const Answers = React.createClass({
  render() {
    const { answer, i} = this.props;
    return (
      <div>
          <p>{answer}</p>
        </div>
    )
  }
});

export default Answers;