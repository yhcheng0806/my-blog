import { THEME_TYPE_MODIFY } from "../constants/actionTypes";
import { dark } from "../assets/theme/dark";
import { light } from "../assets/theme/light";

const defaultState = {
  dark,
  light,
};
const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case THEME_TYPE_MODIFY:
      return defaultState[action.data];
    default:
      return { ...state.light };
  }
};
export default authReducer;
