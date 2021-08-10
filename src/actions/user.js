import { LOGOUT, LOGIN } from "../constants/actionTypes";
import * as api from "../api";

export const login = (formData, history, cb) => async (dispatch) => {
  console.log("-31232131---");
  try {
    const { data } = await api.login(formData);
    dispatch({ type: LOGIN, data });
    cb({ path: "/login" });
  } catch (error) {
    cb({ error });
    console.log(error.message);
  }
};
export const register = (formData, cb) => async (dispatch) => {
  try {
    await api.register(formData);
    cb({ path: "/login" });
  } catch (error) {
    cb({ error });
    console.log(error);
  }
};
export const logout = (history) => {
  history.push("/login");
  return { type: LOGOUT };
};
