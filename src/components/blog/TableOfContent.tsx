import { VFC } from "react";

/** 目次表示用コンポーネント */
export const TableOfContent: VFC = () => {
  return (
    <aside className="sticky top-10 h-[27rem] w-96 shadow-lg">
      <h2 className="flex h-16 items-center p-6 shadow-lg">目次</h2>
      <nav className="toc p-6" />
    </aside>
  );
};
