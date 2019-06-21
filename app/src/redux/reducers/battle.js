import { START_BATTLE, STOP_BATTLE } from "../actions/actionTypes";
import { BATTLE } from "../../shared/constants";

const initialState = {
  status: BATTLE.OFF
};

const characterOrder = (state = initialState, action) => {
  switch (action.type) {
    case START_BATTLE: {
      return {
        ...state,
        status: BATTLE.ON
      }
    }
    case STOP_BATTLE: {
      return {
        ...state,
        status: BATTLE.OFF
      }
    }
    default: {
      return state;
    }
  }
};

export default characterOrder;
