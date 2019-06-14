import { ADD_CHARACTER, START_REORDER } from './actionTypes';

let nextTodoId = 0;

export const addCharacter = content => ({
  type: ADD_CHARACTER,
  payload: {
    id: ++nextTodoId,
    name: content.name,
    hitPoints: content.hitPoints,
    armorClass: content.armorClass,
    initiative: content.initiative,
    speed: content.speed
  }
});

export const startReorder = () => ({
  type: START_REORDER
});

export const orderUp = content => ({

});

export const orderDown = content => ({

});

export const setCharacterOrder = () => ({

});
