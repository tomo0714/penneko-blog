import { ComponentProps, VFC } from "react";

type CommonButtonProps = {
  /** ボタンタイプ */
  type?: "button" | "submit" | "reset" | undefined;
  /** クリック時処理 */
  onClick?: ComponentProps<"button">["onClick"];
  /** ボタンテキスト */
  text: string;
};

/** 共通ボタンコンポーネント */
export const CommonButton: VFC<CommonButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      className="rounded border border-solid border-gray-400 px-2 text-sm text-gray-400"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
