import { LOGOUT, LOGIN } from "../constants/actionTypes";
import * as api from "../api";

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);

    dispatch({ type: LOGIN, data });

    history.push("/home");
  } catch (error) {
    console.log(error.message);
  }
};
export const register = (formData, history) => async (dispatch) => {
  try {
    await api.register(formData);

    history.push("/login");
  } catch (error) {
    console.log(error);
  }
};
export const logout = (history) => {
  history.push("/login");
  return { type: LOGOUT };
};
