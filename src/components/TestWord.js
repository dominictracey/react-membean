import React from 'react';
import PropTypes from 'prop-types';

class TestWord extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onAnswer = this.onAnswer.bind(this);
  }

  onAnswer(option) {
    if (option.correct) {
      window.alert("correct");
    } else {
      window.alert("incorrect");
    }

    this.props.submit();
  }

  render() {
    const {word} = this.props;
    return (
      <div className="card">
        <h4>{word.word}</h4>
        <div>{word.test.question}</div>
        {
          word.test.options.map(function(option) {
            return (
              <div key={option.ordinal} onClick={this.onAnswer(option.option)}>{option.option} {option.text}</div>
            );
          })
        }
      </div>
    );
  }
}

TestWord.propTypes = {
  word: PropTypes.object.isRequired,
  answer: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
  ordinal: PropTypes.number.isRequired,
};

export default TestWord;
