import { CourseData } from "../types/course";

export const courseData: CourseData = {
  id: 1,
  hasNext: true,
  subjectNames: ["유패스 주니어", "1회차", "학습 리스트", "학습2"],
  contents: [
    {
      id: 1,
      template: "TP03",
      isCompleted: false,
      components: [
        {
          type: "TEST",
          data: [
            {
              id: 1,
              text: "CH02_06 보기1",
            },
          ],
        },
      ],
    },
  ],
};
