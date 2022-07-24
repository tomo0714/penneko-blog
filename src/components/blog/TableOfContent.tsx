import Link from "next/link";
import { VFC } from "react";

// type TableOfContentProps = {};

/** 目次表示用コンポーネント */
export const TableOfContent: VFC = (props) => {
  return (
    <aside className="sticky top-10 h-[27rem] w-96 shadow-lg">
      <h2 className="flex h-16 items-center p-6 shadow-lg">目次</h2>
      <ul className="py-8 px-6">
        {/* {props.toc.map((data) => {
          <li>
            <Link key={data.id} href={`#${data.id}`}>
              <a>{data.name}</a>
            </Link>
          </li>;
        })} */}
      </ul>
    </aside>
  );
};
