import { ReactNode, VFC } from "react";

type BlogDetailWrapperProps = {
  children: ReactNode;
};

export const BlogDetailWrapper: VFC<BlogDetailWrapperProps> = (props) => {
  return <div className="mt-10 flex justify-between">{props.children}</div>;
};
