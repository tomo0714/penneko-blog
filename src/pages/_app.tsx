import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { CommonWrapper } from "src/components/CommonWrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
