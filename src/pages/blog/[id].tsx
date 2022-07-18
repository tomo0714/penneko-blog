import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { client } from "src/libs/client";
import { Blog } from "src/pages";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

/** ブログ詳細ページコンポーネント */
const BlogId: NextPage<Props> = (props) => {
  return (
    <div className="mt-10 max-w-[780px] overflow-hidden rounded shadow-lg">
      <figure className="relative h-[400px] w-full">
        <Image
          layout="fill"
          src={props.thumbnail.url}
          alt={props.title}
          objectFit="contain"
        />
      </figure>
      <div className="p-10">
        <h1 className="text-3xl font-bold">{props.title}</h1>
        <time className="mt-2 block text-gray-400" dateTime={props.publishedAt}>
          {dayjs(props.publishedAt).format("YYYY年MM月DD日")}
        </time>
        <article
          className="prose prose-sm mt-8"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true };
  }

  const data = await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId: ctx.params.id,
  });

  return {
    props: data,
  };
};

export default BlogId;
