import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Amazon store v2.0</title>
        <meta name="description" content="Rebuild Amazon store using NextJs" />
      </Head>
      <div className="text-red-700 text-center p-5">
        Hello Amazon store v2.0
      </div>
    </main>
  );
};

export default Home;
