import React from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../styles/colorPalette";
import { CourseData } from "../types/course";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  background: ${colorPalette.deepBlue};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.12);
`;

const HeaderText = styled.span`
  color: white;
  margin: 0;
  font-size: 30px;

  :last-child {
    font-weight: 700;
  }
`;

const HeaderTextGap = styled(HeaderText)`
  margin: 0 8px;
`;

interface HeaderProps {
  subjectNames: CourseData["subjectNames"];
}
const Header = ({ subjectNames }: HeaderProps) => {
  return (
    <HeaderStyle>
      <div>
        {subjectNames.map((subjectName, index) => {
          if (index > 0) {
            return (
              <>
                <HeaderTextGap key={`${subjectName}gap`}>{">"}</HeaderTextGap>
                <HeaderText key={subjectName}>{subjectName}</HeaderText>
              </>
            );
          }
          return <HeaderText key={subjectName}>{subjectName}</HeaderText>;
        })}
      </div>
      <button>X</button>
    </HeaderStyle>
  );
};

export default Header;
