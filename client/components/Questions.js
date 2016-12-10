import React from 'react';
import Answers from './Answers'

const Questions = React.createClass({
  render() {
    console.log("HAYYYY")
    const { questions, i, answers} = this.props;
    return (
      <div>
          <p>{questions}</p>
        </div>
    )
  }
});

export default Questions;


        /* <li>
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
        </li> */
