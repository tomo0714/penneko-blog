import { ReactNode, VFC } from "react";

type CommonWrapperProps = {
  children: ReactNode;
};

/** 共通ラッパーコンポーネント */
export const CommonWrapper: VFC<CommonWrapperProps> = (props) => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-[1200px] px-3 py-5">{props.children}</div>
    </div>
  );
};
