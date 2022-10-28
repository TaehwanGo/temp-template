import { courseData } from "../data/dummyData";
import { CourseData } from "../types/course";

export const getInitialCourseData = () => {
  return process.env.NODE_ENV === "development"
    ? courseData
    : ((window.opener.COURSE_DATA || {}) as CourseData);
};
