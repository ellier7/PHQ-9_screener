import React from 'react';
import AnswerChoices from './AnswerChoices'
import Submit from './Submit'

const Questions = React.createClass({
  render() {
    // {console.log(">>>>>PROPSSSS", this.props)}
    const { questions, i, score} = this.props;
    return (
      <div style={{marginLeft: '10%'}}>
          <center><h3>{questions}</h3></center>
        <AnswerChoices {...this.props} />
        </div>
    )
  }
});

export default Questions;

           {/*{this.renderAnswers()}
          
        } <ul>
            <li
          onClick={this.props.increment.bind(this, 0, i)}
          span={score === 0 ? 'incremented':null}>
            <span>Not at all</span>
            </li>
            <li
          onClick={this.props.increment.bind(this, 1, i)}
          span={score === 1 ? 'incremented':null}>
            <span>Several days</span>
            </li>
            <li
          onClick={this.props.increment.bind(this, 2, i)}
          span={score === 2 ? 'incremented':null}>
            <span>More than half the days</span>
            </li>
            <li
          onClick={this.props.increment.bind(this, 3, i)}
          span={score === 3 ? 'incremented':null}>
            <span>Nearly every day</span>
            </li>

               </ul> */}


