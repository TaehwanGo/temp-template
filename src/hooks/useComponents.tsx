import TEST_COMP from "../components/molecules/TEST_COMP";
import { TEST, Component, ComponentType } from "../types/course";

// components mapper
const useComponents = () => {
  const getComponent = (component: Component) => {
    console.log("component", component);
    const { type, data } = component;
    const componentMapper: Readonly<Record<ComponentType, JSX.Element>> = {
      TEST: <TEST_COMP data={data as TEST["data"]} />,
      CH02_06: <div>CH02_06</div>,
    };
    return componentMapper[type];
  };

  return {
    getComponent,
  };
};
export default useComponents;
