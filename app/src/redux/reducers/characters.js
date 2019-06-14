import { ADD_CHARACTER } from '../actions/actionTypes';

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CHARACTER: {
      const { id, name, hitPoints, armorClass, initiative, speed } = action.payload;


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
