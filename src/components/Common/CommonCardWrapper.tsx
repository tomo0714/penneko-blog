import { ReactNode, VFC } from "react";

type CommonCardWerapperProps = {
  children: ReactNode;
};

/** 共通カードラッパーコンポーネント */
export const CommonCardWrapper: VFC<CommonCardWerapperProps> = (props) => {
  return (
    <ul className="mt-4 grid gap-[2%] sm:grid-cols-[repeat(auto-fit,49%)] lg:grid-cols-[repeat(auto-fit,32%)]">
      {props.children}
    </ul>
  );
};
