import {
  ADD_CHARACTER,
  ADD_CHARACTER_CUSTOM_ORDER,
  ORDER_DOWN,
  ORDER_UP,
  START_BATTLE,
  START_REORDER,
  STOP_REORDER
} from './actionTypes';

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

export const addCharacterReorder = content => ({
  type: ADD_CHARACTER_CUSTOM_ORDER,
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

export const stopReorder = () => ({
  type: STOP_REORDER
});

export const orderUp = id => ({
  type: ORDER_UP,
  payload: {
    id
  }
});

export const orderDown = id => ({
  type: ORDER_DOWN,
  payload: {
    id
  }
});

export const startBattle = () => ({
  type: START_BATTLE
});

export const setCharacterOrder = () => ({

});
