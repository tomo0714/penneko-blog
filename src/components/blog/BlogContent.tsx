import { VFC } from "react";
import Image from "next/image";
import dayjs from "dayjs";

type BlogContentProps = {
  /** サムネイルsrc */
  src: string;
  /** タイトル */
  title: string;
  /** 公開日時 */
  publishedAt: string;
  /** 本文 */
  body: string;
};

/** ブログ本文表示部分コンポーネント */
export const BlogContent: VFC<BlogContentProps> = (props) => {
  return (
    <div className="blogContent m-auto max-w-[780px] overflow-hidden rounded-lg bg-white shadow-md lg:w-[780px]">
      <figure className="relative w-full pt-[56.25%]">
        <Image
          layout="fill"
          objectFit="contain"
          src={props.src}
          alt={props.title}
        />
      </figure>
      <div className="p-5 md:p-10">
        <h1 className="text-xl font-bold md:text-2xl">{props.title}</h1>
        <time className="mt-2 block text-gray-400" dateTime={props.publishedAt}>
          {dayjs(props.publishedAt).format("YYYY年MM月DD日")}
        </time>
        <article
          className="prose prose-sm mt-8 sm:text-base sm:leading-loose"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
      </div>
    </div>
  );
};
