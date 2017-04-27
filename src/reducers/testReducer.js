import {ANSWER_TEST_QUESTION} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function testReducer(state = initialState.test, action) {
  let newState;

  switch (action.type) {
    case ANSWER_TEST_QUESTION:
      newState = objectAssign({}, state);

      // newState[action.fieldName] = action.value;
      // newState.necessaryDataIsProvidedToCalculateSavings = calculator().necessaryDataIsProvidedToCalculateSavings(newState);
      // newState.dateModified = action.dateModified;
      //
      // if (newState.necessaryDataIsProvidedToCalculateSavings) {
      //   newState.savings = calculator().calculateSavings(newState);
      // }

      return newState;

    default:
      return state;
  }
}
