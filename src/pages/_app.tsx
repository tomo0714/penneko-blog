import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "src/components/Common/Header";
import { CommonWrapper } from "src/components/Common/CommonWrapper";
import { Footer } from "src/components/Common/Footer";

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
