import { VFC } from "react";
import { BlogContent } from "src/components/blog/BlogContent";
import { TableOfContent } from "src/components/blog/TableOfContent";
import { BlogWrapper } from "src/components/blog/BlogWrapper";

type BlogPageProps = {
  /** サムネイル画像src */
  src: string;
  /** ブログタイトル */
  title: string;
  /** 公開日時 */
  publishedAt: string;
  /** ブログ本文 */
  body: string;
};

/** ブログ詳細ページコンポーネント */
export const BlogPage: VFC<BlogPageProps> = (props) => {
  return (
    <BlogWrapper>
      <BlogContent
        src={props.src}
        title={props.title}
        publishedAt={props.publishedAt}
        body={props.body}
      />
      <TableOfContent />
    </BlogWrapper>
  );
};
