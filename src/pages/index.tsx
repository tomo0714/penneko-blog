import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { ComponentProps, useState } from "react";
import { CommonButton } from "src/components/CommonButton";
import { CommonCard } from "src/components/CommonCard";
import { CommonCardWrapper } from "src/components/CommonCardWrapper";
import { CommonInput } from "src/components/CommonInput";
import { client } from "src/libs/client";

type ThumbnailType = {
  /** サムネイルURL */
  url: string;
  /** 画像高さ */
  hight: number;
  /** 画像幅 */
  width: number;
};

export type Blog = {
  /** ブログタイトル */
  title: string;
  /** ブログ本文 */
  body: string;
  /** サムネイル */
  thumbnail: ThumbnailType;
};

type Props = MicroCMSListResponse<Blog>;

/** ホームページコンポーネント */
const Home: NextPage<Props> = (props) => {
  const [search, setSearch] = useState<MicroCMSListResponse<Blog>>();
  const contents = search ? search.contents : props.contents;
  const totalCount = search ? search.totalCount : props.totalCount;

  /** serchボタンクリック時処理 */
  const onSubmitSerch: ComponentProps<"form">["onSubmit"] = async (event) => {
    event.preventDefault();
    const q = event.currentTarget.query.value;
    const data = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ q }),
    });
    const json: MicroCMSListResponse<Blog> = await data.json();
    setSearch(json);
  };

  /** resetボタンクリック時処理 */
  const onClickReset: ComponentProps<"button">["onClick"] = () => {
    setSearch(undefined);
  };

  return (
    <>
      <form className="flex gap-x-2" onSubmit={onSubmitSerch}>
        <CommonInput type="text" name="query" placeholder="ブログタイトル" />
        <CommonButton text="検索" />
        <CommonButton type="reset" onClick={onClickReset} text="クリア" />
      </form>
      <p className="mt-4 text-gray-400">
        {`${search ? "検索結果" : "記事の総数"}: ${totalCount}件`}
      </p>
      <CommonCardWrapper>
        {contents.map((content) => {
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
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({
    endpoint: "blog",
  });
  return {
    props: data,
  };
};

export default Home;
