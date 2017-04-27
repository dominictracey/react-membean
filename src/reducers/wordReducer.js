import {LOAD_WORDS} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function submitAnswerReducer(state = initialState.words, action) {
  let newState;

  switch (action.type) {
    case LOAD_WORDS:
      newState = objectAssign({}, state);

      return newState;

    default:
      return state;
  }
}
