import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { courseState } from "../states/courseState";
import { getInitialCourseData } from "../utils/data";

/**
 * courseData 관련 store 및 reducer 관리
 */
const useCourseData = () => {
  const [courseData, setCourseData] = useRecoilState(courseState);

  useEffect(() => {
    const courseDataFromWindow = getInitialCourseData();
    setCourseData(courseDataFromWindow);
  }, [courseData, setCourseData]);

  return {
    courseData,
  };
};

export default useCourseData;
