import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header/Header";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Amazon store v2.0</title>
        <meta name="description" content="Rebuild Amazon store using NextJs" />
      </Head>
      <div>
        <Header />
      </div>
    </main>
  );
};

export default Home;
