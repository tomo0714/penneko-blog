import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { link } from "fs";

/** 共通ヘッダーコンポーネント */
export const Header = () => {
  const ICONS = [
    { link: "https://github.com/tomo0714/penneko-blog", icon: <FaGithub /> },
    { link: "https://twitter.com/714_piano", icon: <FaTwitter /> },
    {
      link: "https://z-p15.www.instagram.com/Penneko0714/",
      icon: <FaInstagram />,
    },
  ];

  return (
    <header className="fixed top-0 z-10 w-full border-b bg-white py-2 px-1">
      <div className="m-auto flex w-full max-w-[1200px] items-center justify-between ">
        <Link href="/">
          <a className="m-auto block w-fit">
            <Image src="/Black on Transparent.png" width={300} height={50} />
          </a>
        </Link>
        <div className="hidden md:flex">
          {ICONS.map((data) => {
            return (
              <Link href={data.link} key={data.link}>
                <div className="mr-5 cursor-pointer text-2xl">{data.icon}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};
