import { GET_USERS_SUCESS, UPDATE_FORM, CREATE_USER_SUCESS } from './type';

export function createUserSucess(newUser) {
  return {
    type: CREATE_USER_SUCESS,
    newUser
  };
}

export function updateForm(name, value) {
  return {
    type: UPDATE_FORM,
    name,
    value,
  }
}

export function getUsersSuccess(users) {
  return {
    type: GET_USERS_SUCESS,
    users,
  };
}

