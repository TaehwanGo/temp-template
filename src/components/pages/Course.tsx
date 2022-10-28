import React, { useEffect } from "react";
import useCourse from "../../hooks/useCourse";
import useTemplate from "../../hooks/useTemplate";
import CourseCommon from "../templates/CourseCommon";

const Course = () => {
  const { courseData, currentContent } = useCourse();

  const { getTemplate } = useTemplate({ content: currentContent });

  useEffect(() => {
    console.log("currentContent.template", currentContent?.template);
    // console.log("getTemplate(currentContent.template)", getTemplate(currentContent.template));
  });

  return (
    <CourseCommon courseData={courseData}>
      {currentContent ? getTemplate(currentContent.template) : <></>}
    </CourseCommon>
  );
};

export default Course;
