import { ADD_CHARACTER } from '../actionTypes';

let characterId = 0;

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CHARACTER: {
      const id = ++characterId;
      const { name, hitPoints, armorClass, initiative, speed } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            name, hitPoints, armorClass, initiative, speed
          }
        }
      };
    }
    default:
      return state;
  }
}
