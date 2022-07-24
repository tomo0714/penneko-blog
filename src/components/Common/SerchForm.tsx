import { MicroCMSListResponse } from "microcms-js-sdk";
import { ComponentProps, VFC } from "react";
import { CommonButton } from "src/components/Common/CommonButton";
import { CommonInput } from "src/components/Common/CommonInput";
import { Blog } from "src/pages";

type SerchFormProps = {
  /** 検索結果 */
  search?: MicroCMSListResponse<Blog>;
  /** 記事の総数 */
  totalCount: number;
  /** 検索ボタンクリック時処理 */
  onSubmitSerch: ComponentProps<"form">["onSubmit"];
  /** リセットボタンクリック時処理 */
  onClickReset: ComponentProps<"button">["onClick"];
};

export const SerchForm: VFC<SerchFormProps> = (props) => {
  return (
    <>
      <form className="flex gap-x-2" onSubmit={props.onSubmitSerch}>
        <CommonInput type="text" name="query" placeholder="ブログタイトル" />
        <CommonButton text="検索" />
        <CommonButton type="reset" onClick={props.onClickReset} text="クリア" />
      </form>
      <p className="mt-4 text-gray-400">
        {`${props.search ? "検索結果" : "記事の総数"}: ${props.totalCount}件`}
      </p>
    </>
  );
};
