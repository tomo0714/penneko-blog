import dayjs from "dayjs";
import Link from "next/link";
import { VFC } from "react";

type CommonCardProps = {
  /** カードクリック時遷移先URL */
  link: string;
  /** サムネイル画像URL */
  href: string;
  /** alt属性 */
  alt: string;
  /** 公開日時 */
  publishedAt: string;
  /** タイトル */
  title: string;
};

/** 共通カード用コンポーネント */
export const CommonCard: VFC<CommonCardProps> = (props) => {
  return (
    <li className="overflow-hidden rounded shadow-lg">
      <Link href={props.link}>
        <a>
          <figure className="mb-5">
            <img className="w-full" src={props.href} alt={props.title} />
          </figure>
          <div className="mb-2 px-6 text-gray-400">
            <span>{dayjs(props.publishedAt).format("YYYY.MM.DD")}</span>
          </div>
          <div className="mb-6 px-6 pb-6">
            <h2 className="text-lg font-bold">{props.title}</h2>
          </div>
        </a>
      </Link>
    </li>
  );
};
