import { ADD_CHARACTER } from './actionTypes';

let nextTodoId = 0;

export const addCharacter = content => ({
  type: ADD_CHARACTER,
  payload: {
    id: ++nextTodoId,
    content
  }
});
