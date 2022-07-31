import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { ComponentProps, useState } from "react";
import { TopPage } from "src/components/top/TopPage";
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({
    endpoint: "blog",
  });
  return {
    props: data,
  };
};

/** Topページコンテナ */
const Home: NextPage<Props> = (props) => {
  const [search, setSearch] = useState<MicroCMSListResponse<Blog>>();
  const contents = search ? search.contents : props.contents;

  /** 検索時処理 */
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

  return <TopPage onSubmitSerch={onSubmitSerch} contents={contents} />;
};

export default Home;
