import { ReactNode, VFC } from "react";

type CommonCardWerapperProps = {
  children: ReactNode;
};

export const CommonCardWrapper: VFC<CommonCardWerapperProps> = (props) => {
  return (
    <ul className="mt-4 grid grid-cols-[repeat(auto-fit,32%)] gap-[2%]">
      {props.children}
    </ul>
  );
};
