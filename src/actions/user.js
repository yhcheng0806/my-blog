import { LOGOUT, LOGIN } from "../constants/actionTypes";
import * as api from "../api";

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);

    dispatch({ type: LOGIN, data });

    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};
export const register = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);

    dispatch({ type: LOGIN, data });

    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};
export const logout = (history) => {
  history.push("/");
  return { type: LOGOUT };
};
