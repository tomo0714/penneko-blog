import { ReactNode, VFC } from "react";

type BlogWrapperProps = {
  children: ReactNode;
};

/** ブログページラッパーコンポーネント */
export const BlogWrapper: VFC<BlogWrapperProps> = (props) => {
  return <div className="mt-10 flex justify-between">{props.children}</div>;
};
