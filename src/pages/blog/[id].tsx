import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";
import { Blog } from "src/pages";
import { JSDOM } from "jsdom";
import { BlogPage } from "src/components/blog/BlogPage";

export type Toc = {
  text: string | null;
  id: string;
  name: string;
};

type BlogProps = Blog & MicroCMSContentId & MicroCMSDate;

/** ブログ詳細ページへのルーティングを作成 */
export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogProps, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true };
  }

  const data = await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId: ctx.params.id,
  });

  /** ブログ本文から見出しタグを抜き出す */
  const dom = new JSDOM(data.body);
  const toc: Toc[] = [];
  dom.window.document.querySelectorAll("h1,h2,h3").forEach((heading) => {
    toc.push({
      id: heading.id,
      text: heading.textContent,
      name: heading.tagName,
    });
  });

  return {
    props: data,
  };
};

/** ブログ詳細ページコンテナ */
const Blog: NextPage<BlogProps> = (props) => {
  return (
    <BlogPage
      src={props.thumbnail.url}
      title={props.title}
      publishedAt={props.publishedAt}
      body={props.body}
    />
  );
};

export default Blog;
