import { UPDATE_FORM } from '../actions/type';

const initialState = {
  firstname: '',
  lastname: '',
  avatar: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        [action.name]: action.value
      };
    default:
      return state;
  }
};

export default reducer;
