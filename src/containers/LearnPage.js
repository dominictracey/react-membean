import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import WordComponent from '../components/WordComponent';


class LearnPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {words} = this.props;
    const retval = words ?
      (<div className="container">
        <h2>Study the words</h2>
        {
          words.map(function(word,i) {
            return (
              <WordComponent key={i} word={word}/>
            );
          })
        }
      </div>)
    : (<div>'loading...'</div>);
    return retval;
  }
}

LearnPage.propTypes = {
  words: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    words: state.wordReducer,
  };
}



export default connect(mapStateToProps)(LearnPage);
