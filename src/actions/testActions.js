import * as types from '../constants/actionTypes';

import {getFormattedDateTime} from '../utils/dateHelper';

export function answerTestQuestion(question, answer) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.ANSWER_TEST_QUESTION,
      dateAnswered: getFormattedDateTime(),
      question,
      answer,
    });
  };
}
