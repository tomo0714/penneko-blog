import Link from "next/link";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

/** 共通フッターコンポーネント */
export const Footer = () => {
  const ICONS = [
    { link: "https://github.com/tomo0714/penneko-blog", icon: <FaGithub /> },
    { link: "https://twitter.com/714_piano", icon: <FaTwitter /> },
    {
      link: "https://z-p15.www.instagram.com/Penneko0714/",
      icon: <FaInstagram />,
    },
  ];

  return (
    <footer className="m-auto max-w-[1200px] border-t px-4">
      {/** About */}
      <div className="py-10 md:text-center">
        <h4 className="inline-block border-b-2 border-gray-500 text-xl">
          About
        </h4>
        <p className="mt-5">
          &quot;Penneko IT Blog&quot;
          は、Web技術に関するトピックスを配信するブログサイトです。
          <br />
          このサイトはNext.js + Typescript + microCMSで構築しております
          <br />
        </p>
      </div>
      <div className="flex h-16 p-5">
        <p className="mr-5 text-gray-500">Copyright &copy;2022 Penneko</p>
        <div className="flex">
          {ICONS.map((data) => {
            return (
              <Link href={data.link}>
                <div className="mr-2 cursor-pointer text-xl text-gray-500">
                  {data.icon}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
