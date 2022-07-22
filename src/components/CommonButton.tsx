import { ComponentProps, VFC } from "react";

type CommonButtonProps = {
  /** ボタンタイプ */
  type?: "button" | "submit" | "reset" | undefined;
  /** クリック時処理 */
  onClick?: ComponentProps<"button">["onClick"];
  /** ボタンテキスト */
  text: string;
};

export const CommonButton: VFC<CommonButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      className="rounded border border-solid border-gray-600 px-2 text-gray-600"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
