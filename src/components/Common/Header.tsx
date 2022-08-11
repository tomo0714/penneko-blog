import Link from "next/link";
import Image from "next/image";

/** 共通ヘッダーコンポーネント */
export const Header = () => {
  return (
    <header className="p-8">
      <Link href="/">
        <a className="m-auto block w-fit">
          <Image src="/Black on Transparent.png" width={500} height={80} />
          (開発環境)
        </a>
      </Link>
    </header>
  );
};
