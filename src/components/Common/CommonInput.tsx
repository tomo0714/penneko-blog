import { VFC } from "react";

type CommonInputProps = {
  /** フォームタイプ */
  type: string;
  /** フォーム名 */
  name: string;
  /** フォームSプレイスホルダー */
  placeholder: string;
};

/** 共通フォームコンポーネント */
export const CommonInput: VFC<CommonInputProps> = (props) => {
  return (
    <input
      type={props.type}
      name={props.name}
      className="w-[150px] rounded border border-solid border-gray-400 px-2 text-sm"
      placeholder={props.placeholder}
    />
  );
};
