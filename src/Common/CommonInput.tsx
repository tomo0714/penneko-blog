import { VFC } from "react";

type CommonInputProps = {
  type: string;
  name: string;
  placeholder: string;
};

export const CommonInput: VFC<CommonInputProps> = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      className="rounded border border-solid border-gray-600 px-2"
      placeholder={props.placeholder}
    />
  );
};
