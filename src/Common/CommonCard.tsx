import dayjs from "dayjs";
import { link } from "fs";
import Link from "next/link";
import { VFC } from "react";

type CommonCardType = {
  /** コンテンツid */
  id: string;
  /** カードクリック時遷移先URL */
  link: string;
  /** サムネイル画像URL */
  thumbnailUrl?: string;
  /** alt属性 */
  alt: string;
  /** 公開日時 */
  publishedAt: string;
  /** タイトル */
  title: string;
};

/** 共通カード用コンポーネント */
export const CommonCard: VFC<CommonCardType> = (props) => {
  return (
    <li key={props.id} className="overflow-hidden rounded shadow-lg">
      <Link href={props.link}>
        <a>
          <img className="w-full" src={props.thumbnailUrl} alt={props.title} />
          <div>
            <span>{dayjs(props.publishedAt).format("YYYY.MM.DD")}</span>
          </div>
          <div>
            <h2>{props.title}</h2>
          </div>
        </a>
      </Link>
    </li>
  );
};
