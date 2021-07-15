import { THEME_TYPE_MODIFY } from "../constants/actionTypes";

export const modifyThemeType = (themeType) => {
  return { type: THEME_TYPE_MODIFY, data: themeType };
};
