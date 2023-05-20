import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.invitees.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>The Wedding of Yuni & Indra</title>
        <meta name="description" content="17.06.23" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-3xl font-bold text-white">
            The Wedding of Yuni & Indra
          </h1>
        </div>
      </main>
    </>
  );
};

export default Home;
