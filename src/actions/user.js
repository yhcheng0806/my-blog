import { LOGOUT, LOGIN, FOLLOW, UNFOLLOW } from "../constants/actionTypes";
import * as api from "../api/models/auth";

export const login = (formData, history, cb) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: LOGIN, data });
    cb && cb({ path: "/login" });
  } catch (error) {
    cb && cb({ error: error.message });
  }
};
export const register = (formData, cb) => async (dispatch) => {
  try {
    await api.register(formData);
    cb && cb({ path: "/login" });
  } catch (error) {
    cb && cb({ error: error.message });
  }
};
export const logout = (history) => {
  history.push("/login");
  return { type: LOGOUT };
};

export const follow = (userId) => ({
  type: FOLLOW,
  payload: userId,
});

export const unfollow = (userId) => ({
  type: UNFOLLOW,
  payload: userId,
});
