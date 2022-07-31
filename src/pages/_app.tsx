import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "src/components/Common/Header";
import { CommonWrapper } from "src/components/Common/CommonWrapper";
import { Footer } from "src/components/Common/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Penneko IT Blog</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.css"
        />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Head>
      <Header />
      <main>
        <CommonWrapper>
          <Component {...pageProps} />
        </CommonWrapper>
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
