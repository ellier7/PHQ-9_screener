import React from 'react';

const Questionaire = React.createClass({
  render() {
    console.log("<<<<<PPROPSS", this.props)
    const { questions, i } = this.props;
    return (
      <div>
          <p>{questions.question}</p>
        <li>
            <span>Not at all</span>
        </li>
        <li>
            <span>Several days</span>
        </li>
        <li>
             <span>More than half the days</span>
        </li>
        <li>
            <span>Nearly every day</span>
        </li>
        </div>
    )
  }
});

export default Questionaire;
