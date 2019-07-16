import { combineReducers } from 'redux';
import usersReducer from './users';
import formReducer from './form';

const reducer = combineReducers({
  users: usersReducer,
  form: formReducer,
});

export default reducer;
