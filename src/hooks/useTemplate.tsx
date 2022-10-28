import TP03 from "../components/templates/TP03";
import { Content, TemplateType } from "../types/course";

interface UseTemplateProps {
  content: Content;
}
const useTemplate = (props: UseTemplateProps) => {
  // TODO: 템플릿 매퍼 만들기
  const templateMapper: Readonly<Record<TemplateType, JSX.Element>> = {
    TP01: <div>123</div>,
    TP02: <div>123</div>,
    TP03: <TP03 {...props} />,
    TP04: <div>123</div>,
    TP05: <div>123</div>,
    TP06: <div>123</div>,
    TP07: <div>123</div>,
    TP08: <div>123</div>,
    TP09: <div>123</div>,
    TP10: <div>123</div>,
    TP11: <div>123</div>,
    TP12: <div>123</div>,
    TP13: <div>123</div>,
    TP14: <div>123</div>,
    TP15: <div>123</div>,
    TP16: <div>123</div>,
    TP17: <div>123</div>,
    TP18: <div>123</div>,
    TP19: <div>123</div>,
    TP20: <div>123</div>,
    TP21: <div>123</div>,
    TP22: <div>123</div>,
  };

  const getTemplate = (templateType: TemplateType) => {
    return templateMapper[templateType];
  };

  return {
    getTemplate,
  };
};

export default useTemplate;
