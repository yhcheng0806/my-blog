import { dark } from "./dark";
import { light } from "./light";

const colors = { dark, light };

export const modifyTheme = (themeType = "dark") => colors[themeType];
