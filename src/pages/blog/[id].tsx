import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { BlogContent } from "src/components/BlogContent";
import { BlogDetailWrapper } from "src/components/BlogDetailWrapper";
import { client } from "src/libs/client";
import { Blog } from "src/pages";
import { renderToc } from "src/libs/render-toc";
import { TableOfContent } from "src/components/TableOfContent";

type BlogDetailProps = Blog & MicroCMSContentId & MicroCMSDate;

/** ブログ詳細ページコンポーネント */
const BlogDetail: NextPage<BlogDetailProps> = (props) => {
  const toc = renderToc(props.body);

  return (
    <BlogDetailWrapper>
      <BlogContent
        src={props.thumbnail.url}
        title={props.title}
        publishedAt={props.publishedAt}
        body={props.body}
      />
      <TableOfContent toc={toc} />
    </BlogDetailWrapper>
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

export const getStaticProps: GetStaticProps<
  BlogDetailProps,
  { id: string }
> = async (ctx) => {
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

export default BlogDetail;
