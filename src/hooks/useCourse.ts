import { useMemo } from "react";
import { useRecoilState } from "recoil";
import { currentCourseIndexState } from "../states/currentCourseIndexState";
import useCourseData from "./useCourseData";

const useCourse = () => {
  const { courseData } = useCourseData();
  const [currentCourseIndex, setCurrentCourseIndex] = useRecoilState(currentCourseIndexState);
  const currentContent = useMemo(
    () => courseData?.contents[currentCourseIndex],
    [courseData, currentCourseIndex],
  );

  return {
    courseData,
    currentContent,
  };
};

export default useCourse;
