import { atom } from "recoil";
import { CourseData } from "../types/course";

export const courseState = atom<CourseData>({
  key: "courseState",
  default: {
    id: 1,
    hasNext: true,
    subjectNames: [],
    contents: [],
  },
});
