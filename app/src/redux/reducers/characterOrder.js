import { SET_CHARACTER_ORDER } from "../actionTypes";
import { CHARACTER_ORDER } from "../../shared/constants";

const initialState = CHARACTER_ORDER.INITIATIVE;

const characterOrder = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER_ORDER: {
      return action.payload.order;
    }
    default: {
      return state;
    }
  }
};

export default characterOrder;
