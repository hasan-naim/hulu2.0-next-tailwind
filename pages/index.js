import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="This is movie app with next js." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-slate-700 drop-shadow-md">
          <Header />
          <Nav />
        </div>
      </main>
    </div>
  );
}
