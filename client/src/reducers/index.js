import { combineReducers } from 'redux';
import user from './user';
import orders from './orders';

const rootReducer = combineReducers({
  user,
  orders
});

export default rootReducer;