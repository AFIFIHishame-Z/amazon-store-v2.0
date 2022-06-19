import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/banner/Banner";
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
      <section className="max-w-screen-2xl mx-auto">
        <Banner />
      </section>
    </main>
  );
};

export default Home;
