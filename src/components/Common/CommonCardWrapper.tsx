import { ReactNode, VFC } from "react";

type CommonCardWerapperProps = {
  children: ReactNode;
};

/** 共通カードラッパーコンポーネント */
export const CommonCardWrapper: VFC<CommonCardWerapperProps> = (props) => {
  return (
    <ul className="mt-4 sm:grid sm:grid-cols-[repeat(auto-fit,49%)] sm:gap-[2%] lg:grid-cols-[repeat(auto-fit,32%)]">
      {props.children}
    </ul>
  );
};
