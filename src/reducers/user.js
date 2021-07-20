import { LOGIN, LOGOUT } from "../constants/actionTypes";

const defaultState = {
  userInfo: JSON.parse(localStorage.getItem("userInfo") || null),
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("userInfo", JSON.stringify({ ...action?.data }));
      return { ...state, userInfo: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, userInfo: null };
    default:
      return state;
  }
};
export default authReducer;
