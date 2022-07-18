import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { ComponentProps, useState } from "react";
import { CommonCard } from "src/Common/CommonCard";
import { client } from "src/libs/client";

type IThumbnail = {
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
  thumbnail?: IThumbnail;
};

type Props = MicroCMSListResponse<Blog>;

/** ホームページ表示コンポーネント */
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
        <input type="text" name="query" className="border border-black px-2" />
        <button className="border border-black px-2">search</button>
        <button
          type="reset"
          className="border border-black px-2"
          onClick={onClickReset}
        >
          reset
        </button>
      </form>
      <p className="mt-4 text-gray-400">
        {`${search ? "検索結果" : "記事の総数"}: ${totalCount}件`}
      </p>
      <ul className="mt-4 grid grid-cols-[repeat(auto-fit,32%)] gap-[2%]">
        {contents.map((content) => {
          return (
            <CommonCard
              id={content.id}
              link={`blog/${content.id}`}
              thumbnailUrl={content.thumbnail?.url}
              alt={content.title}
              publishedAt={content.publishedAt}
              title={content.title}
            />
          );
        })}
      </ul>
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
