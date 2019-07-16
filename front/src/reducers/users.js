
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATAS':
      return {
        ...state,
        [action.name]: action.value
      };
    default:
      return state;
  }
};

export default reducer;
