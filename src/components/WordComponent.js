import React from 'react';
import PropTypes from 'prop-types';

const WordComponent = (props) => {

  const {word} = props;
  return (
    <div className="card">
      <h4>{word.word}</h4>
      <div className="section">
        <h5>Synonyms:</h5> {word.synonyms.map(function(syn,i) {
          return (<span key={i} className="word">{syn.word}</span>);
        })}
      </div>
      <div className="section">
        <h5>Example Usage:</h5><ul>
         {word.usages.map(function(use,i) {
          return (<li key={i}><span  className="word">{use.usage}</span></li>);
        })}
      </ul>
      </div>
    </div>
  );
};

WordComponent.propTypes = {
  word: PropTypes.object.isRequired,
};

export default WordComponent;
