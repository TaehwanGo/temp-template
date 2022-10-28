import styled from "@emotion/styled";
import React from "react";
import { CourseData } from "../../types/course";
import Footer from "../Footer";
import Header from "../Header";

const Container = styled.div`
  height: 100vh;
`;

const Main = styled.main`
  width: 100%;
  padding: 24px 32px;
`;

interface CourseCommonProps {
  children: JSX.Element;
  courseData: CourseData | undefined;
}
const CourseCommon = ({ children, courseData }: CourseCommonProps) => {
  return (
    <Container>
      <Header subjectNames={courseData?.subjectNames ?? []} />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default CourseCommon;
