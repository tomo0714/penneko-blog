/** 共通フッターコンポーネント */
export const Footer = () => {
  return (
    <footer className="mt-20">
      <div className=" bg-zinc-100 py-10 text-center">
        <h4 className="inline-block border-b-2 border-black pb-2 text-3xl">
          About
        </h4>
        <p className="mt-10 px-5">
          &quot;Penneko IT Blog&quot;
          は、Webフロントエンド開発に関するトピックを発信する技術ブログです。
        </p>
        <p className="mt-5 px-5">
          このサイトはmicroCMSで構築しNetlifyから配信しています。
        </p>
      </div>
      <div className="h-16 bg-black p-5 text-center text-white">
        &copy;2022 Penneko
      </div>
    </footer>
  );
};
