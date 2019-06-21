import { START_REORDER, STOP_REORDER } from "../actions/actionTypes";
import { CHARACTER_ORDER } from "../../shared/constants";

const initialState = {
  reordering: false,
  order: CHARACTER_ORDER.INITIATIVE
};

const characterOrder = (state = initialState, action) => {
  switch (action.type) {
    case START_REORDER: {
      return {
        ...state,
        reordering: true,
        order: CHARACTER_ORDER.CUSTOM
      }
    }
    case STOP_REORDER: {
      return {
        ...state,
        reordering: false
      }
    }
    default: {
      return state;
    }
  }
};

export default characterOrder;
