import { combineReducers } from "redux";

import user from "./user";
import theme from "./theme";
import tabBar from "./tabBar";

export default combineReducers({ user, theme, tabBar });
