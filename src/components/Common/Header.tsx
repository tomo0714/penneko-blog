import Link from "next/link";

/** 共通ヘッダーコンポーネント */
export const Header = () => {
  return (
    <header className="py-8">
      <Link href="/">
        <a className="text-center text-5xl">
          <h1>Penneko IT Blog</h1>
        </a>
      </Link>
    </header>
  );
};
