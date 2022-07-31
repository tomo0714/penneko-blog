import { ReactNode, VFC } from "react";

type CommonWrapperProps = {
  children: ReactNode;
};

/** 共通ラッパーコンポーネント */
export const CommonWrapper: VFC<CommonWrapperProps> = (props) => {
  return <div className="mx-auto max-w-[1200px] px-3">{props.children}</div>;
};
