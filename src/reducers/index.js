import { combineReducers } from "redux";

import auth from "./auth";
import theme from "./theme";
import tabBar from "./tabBar";

export default combineReducers({ auth, theme, tabBar });
