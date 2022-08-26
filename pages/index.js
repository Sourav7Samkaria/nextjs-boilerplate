import Head from "next/head";
const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>NextJs Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
