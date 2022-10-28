import { atom } from "recoil";
export const currentCourseIndexState = atom<number>({
  key: "currentCourseIndexState",
  default: 0,
});
