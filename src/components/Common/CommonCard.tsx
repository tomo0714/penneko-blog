import dayjs from "dayjs";
import Image from "next/image";
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

/** 共通カードコンポーネント */
export const CommonCard: VFC<CommonCardProps> = (props) => {
  return (
    <li className="overflow-hidden shadow-lg">
      <Link href={props.link}>
        <a>
          <figure className="relative mb-5 w-full pt-[56.25%]">
            <Image
              layout="fill"
              objectFit="fill"
              src={props.href}
              alt={props.title}
            />
          </figure>
          <div className="mb-2 px-6 text-gray-400">
            <span>{dayjs(props.publishedAt).format("YYYY.MM.DD")}</span>
          </div>
          <div className="mb-6 px-6 pb-10">
            <h2 className="text-lg font-bold">{props.title}</h2>
          </div>
        </a>
      </Link>
    </li>
  );
};
