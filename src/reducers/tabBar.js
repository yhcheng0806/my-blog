import { PATHNAME_MODIFY } from "../constants/actionTypes";
const defaultState = {
  tabBar: [
    {
      icon: "home",
      name: "趣事",
      path: "/home",
    },
    {
      icon: "search",
      name: "探索",
      path: "/search",
    },
    {
      icon: "email",
      name: "消息",
      path: "/email",
    },
    {
      icon: "user",
      name: "我的",
      path: "/user",
    },
  ],
  pathname: localStorage.getItem("pathname") || "/home",
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PATHNAME_MODIFY:
      return { ...state, pathname: action.data };
    default:
      return state;
  }
};
export default authReducer;
