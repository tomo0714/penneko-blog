import {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSListResponse,
} from "microcms-js-sdk";
import { ComponentProps, VFC } from "react";
import { CommonCard } from "src/components/Common/CommonCard";
import { CommonCardWrapper } from "src/components/Common/CommonCardWrapper";
import { SerchForm } from "src/components/Common/SerchForm";
import { Blog } from "src/pages";

type TopPageProps = {
  /** 検索ボタンクリック時処理 */
  onSubmitSerch: ComponentProps<"form">["onSubmit"];
  /** ブログコンテンツ */
  contents: (Blog & MicroCMSContentId & MicroCMSDate)[];
};

/** トップページコンポーネント */
export const TopPage: VFC<TopPageProps> = (props) => {
  return (
    <div className="pt-20">
      <SerchForm onSubmitSerch={props.onSubmitSerch} />
      <CommonCardWrapper>
        {props.contents.map((content) => {
          return (
            <CommonCard
              key={content.id}
              link={`blog/${content.id}`}
              href={content.thumbnail.url}
              alt={content.title}
              publishedAt={content.publishedAt}
              title={content.title}
            />
          );
        })}
      </CommonCardWrapper>
    </div>
  );
};
