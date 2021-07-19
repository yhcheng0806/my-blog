import { AUTH, LOGOUT } from "../constants/actionTypes";

const defaultState = {
  authData: JSON.parse(localStorage.getItem("authData") || true),
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("authData", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
export default authReducer;
