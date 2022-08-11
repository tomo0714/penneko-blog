import { MicroCMSListResponse } from "microcms-js-sdk";
import { ComponentProps, VFC } from "react";
import { CommonInput } from "src/components/Common/CommonInput";
import { Blog } from "src/pages";

type SerchFormProps = {
  /** 検索ボタンクリック時処理 */
  onSubmitSerch: ComponentProps<"form">["onSubmit"];
};

/** ブログ検索フォームコンポーネント */
export const SerchForm: VFC<SerchFormProps> = (props) => {
  return (
    <>
      <form
        className="flex h-10 max-w-[500px] items-center gap-x-2 rounded border border-solid border-gray-200 bg-white p-2"
        onSubmit={props.onSubmitSerch}
      >
        <span className="material-symbols-outlined">search</span>
        <CommonInput type="text" name="query" placeholder="Search..." />
      </form>
    </>
  );
};
