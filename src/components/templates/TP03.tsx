import React from "react";
import styled from "@emotion/styled";
import { Content } from "../../types/course";
import useComponents from "../../hooks/useComponents";

const Main = styled.div``;

interface TemplateProps {
  content: Content;
}
const TP03 = ({ content }: TemplateProps) => {
  const { components } = content;
  const { getComponent } = useComponents();
  return (
    <div>
      {components[0] && <div>{getComponent(components[0])}</div>}
      {components[1] && <Main>{getComponent(components[1])}</Main>}
    </div>
  );
};

export default TP03;
