import { START_REORDER } from "../actions/actionTypes";
import { CHARACTER_ORDER } from "../../shared/constants";

const initialState = CHARACTER_ORDER.INITIATIVE;

const characterOrder = (state = initialState, action) => {
  switch (action.type) {
    case START_REORDER: {
      return {
        ...state,
        reordering: true
      }
    }
    default: {
      return state;
    }
  }
};

export default characterOrder;
