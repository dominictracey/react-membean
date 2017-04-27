import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/testActions';
import TestWord from '../components/TestWord';

export class TestPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {words, answers} = this.props;
    return (
      <div className="container">
        {words.map(function(word, i) {
          const answer = answers[i];
          return <TestWord key={i} word={word} index={i} answer={answer}/>;
        })}
    </div>
    );
  }
}

TestPage.propTypes = {
  words: PropTypes.object.isRequired,
  answers: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    words: state.words,
    answers: state.answers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
