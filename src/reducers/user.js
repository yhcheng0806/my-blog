import { LOGIN, LOGOUT } from "../constants/actionTypes";

const userInfo = JSON.parse(localStorage.getItem("userInfo"))?.result;
const defaultState = {
  userInfo: userInfo || null,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("userInfo", JSON.stringify({ ...action?.data }));
      return { ...state, userInfo: action?.data?.result };
    case LOGOUT:
      localStorage.removeItem("userInfo");
      // localStorage.clear();
      return { ...state, userInfo: null };
    default:
      return state;
  }
};
export default authReducer;
