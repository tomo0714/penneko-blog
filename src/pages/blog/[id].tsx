import { useEffect } from "react";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";
import { Blog } from "src/pages";
import { BlogPage } from "src/components/blog/BlogPage";
import tocbot from "tocbot";

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

/** ブログ内容をSSG */
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
  return {
    props: data,
  };
};

/** ブログ詳細ページコンテナ */
const Blog: NextPage<BlogProps> = (props) => {
  /** ブログのh2,h3タグを抽出 */
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".blogContent",
      headingSelector: "h2, h3",
    });
    return () => tocbot.destroy();
  }, []);

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
