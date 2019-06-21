import { ADD_CHARACTER, ORDER_DOWN, ORDER_UP } from '../actions/actionTypes';

const initialState = {
  orderedIds: [],
  byIds: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CHARACTER: {
      const { id, name, hitPoints, armorClass, initiative, speed } = action.payload;

      let characters = [];
      let order = [];

      if (state.orderedIds && state.orderedIds.length > 0) {
        characters = state.orderedIds.map(id =>
          ({ id, initiative: state.byIds[id].initiative })
        );
        characters.push({ id, initiative });
        characters.sort((a, b) => b.initiative - a.initiative);

        order = characters.map(character => character.id);
      } else {
        order = [...state.orderedIds, id];
      }

      return {
        ...state,
        orderedIds: order,
        byIds: {
          ...state.byIds,
          [id]: {
            name, hitPoints, armorClass, initiative, speed
          }
        }
      };
    }
    case ORDER_UP: {
      const { id } = action.payload;
      let orderedIds = [...state.orderedIds];
      const index = orderedIds.findIndex(a => a === id);
      [orderedIds[index - 1], orderedIds[index]] = [orderedIds[index], orderedIds[index - 1]];
      return {
        ...state,
        orderedIds: orderedIds
      };
    }
    case ORDER_DOWN: {
      const { id } = action.payload;
      let orderedIds = [...state.orderedIds];
      const index = orderedIds.findIndex(a => a === id);
      [orderedIds[index], orderedIds[index + 1]] = [orderedIds[index + 1], orderedIds[index]];
      return {
        ...state,
        orderedIds: orderedIds
      };
    }
    default:
      return state;
  }
}
