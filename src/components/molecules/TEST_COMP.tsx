import React from "react";
import { TEST } from "../../types/course";

interface TEST_COMPProps {
  data: TEST["data"];
}
const TEST_COMP = ({ data }: TEST_COMPProps) => {
  console.log("data", data);
  return (
    <>
      <h1>TEST_COMP</h1>
    </>
  );
};

export default TEST_COMP;
