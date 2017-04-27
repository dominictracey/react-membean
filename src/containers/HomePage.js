import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/learnActions';
import {bindActionCreators} from 'redux';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  ComponentWillMount() {
    this.actions.LoadWords();
  }

  render() {
    return (
      <div>
        <h1>Vocabulary</h1>

        <h2>Get Started</h2>
        <ol>
          <li>Review the <Link to="learn">words</Link></li>
          <li>Take the <Link to="test">test</Link></li>
        </ol>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapDispatchToProps)(HomePage);
