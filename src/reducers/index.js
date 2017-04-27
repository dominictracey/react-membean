import { combineReducers } from 'redux';
import testReducer from './testReducer';
import wordReducer from './wordReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  testReducer,
  wordReducer,
  routing: routerReducer
});

export default rootReducer;
