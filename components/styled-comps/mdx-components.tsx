import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Paragraph } from "./paragraph";
import { ListUnordered } from "./list-unordered";
import { ListOrdered } from "./list-ordered";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const sharedComponents = {
  Image,
  p: Paragraph,
  ul: ListUnordered,
  ol: ListOrdered,
};

interface MdxProps {
  code: string;
  components?: Record<string, React.ComponentType>;
  [key: string]: any;
}

export function MDXContent({ code, components, ...props }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <Component components={{ ...sharedComponents, ...components }} {...props} />
  );
}
