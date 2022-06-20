import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import ProductFeed from "../components/products/ProductFeed";

const Home: NextPage<any> = ({ products }: { products: any }) => {
  return (
    <main className="bg-gray-100">
      <Head>
        <title>Amazon store v2.0</title>
        <meta name="description" content="Rebuild Amazon store using NextJs" />
      </Head>
      <div>
        <Header />
      </div>
      <section className="max-w-screen-2xl mx-auto">
        <article>
          <Banner />
        </article>
        <article>
          <ProductFeed products={products} />
        </article>
      </section>
    </main>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products: products,
    },
  };
}
