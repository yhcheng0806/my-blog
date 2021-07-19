import { PATHNAME_MODIFY } from "../constants/actionTypes";

export const modifyPathname = (pathname) => {
  localStorage.setItem("pathname", pathname);
  return { type: PATHNAME_MODIFY, data: pathname };
};
