import { GET_USERS_SUCESS, CREATE_USER_SUCESS } from '../actions/type';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCESS:
      return [...state, ...action.users];
    case CREATE_USER_SUCESS:
      return [...state, action.newUser];
    default:
      return state;
  }
};

export default reducer;
