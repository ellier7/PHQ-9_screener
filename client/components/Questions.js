import React from 'react';
import AnswerList from './AnswerList'

const Questions = React.createClass({
    renderAnswers: function (question) {
  //   <div style={styles.answerContainer}>
  //     {this.props.answers.map((answer, index) => (
  //       <RaisedButton
  //         key={index}
  //         label={answer}
  //         primary={true}
  //         onTouchTap={() => this.addAnswer(question, answer, index)}
  //         style={styles.answerButton}
  //       />
  //     ))}
  //   </div>


   <div>
   // {console.log("QUESTION", question)}
        {this.props.answers.map((answers, i) => 
          <Answers 
          {...this.props} 
          key={i} 
          i={i} 
          answer={answers.text} 
          />
          )}
      </div>
  },
  render() {
    // {console.log(">>>>>PROPSSSS", this.props)}
    const { questions, i, score} = this.props;
        // {console.log("question", i)}
    return (
      <div style={{marginLeft: '10%'}}>
          <p>{questions}</p>
        <AnswerList {...this.props} />
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


