import { ReactNode, VFC } from "react";

type BlogWrapperProps = {
  children: ReactNode;
};

/** ブログページラッパーコンポーネント */
export const BlogWrapper: VFC<BlogWrapperProps> = (props) => {
  return (
    <div className="mt-10 pt-10 lg:flex lg:justify-between lg:gap-x-5">
      {props.children}
    </div>
  );
};
