/** 共通フッターコンポーネント */
export const Footer = () => {
  return (
    <footer className="mt-20">
      <div className=" bg-zinc-300 py-10 text-center">
        <h4 className="inline-block border-b-2 border-black pb-4 text-3xl">
          About
        </h4>
        <p className="mt-10">
          &quot;Penneko IT Blog&quot;
          は、Webフロントエンド開発に関するトピックを発信する技術ブログです。
        </p>
        <p className="mt-5">
          このサイトはmicroCMSで構築しNetlifyから配信しています。
        </p>
        <p className="mt-5">プライバシーポリシー</p>
      </div>
      <div className="h-16 bg-black p-5 text-center text-white">
        &copy;copyright
      </div>
    </footer>
  );
};
