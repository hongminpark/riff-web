import Head from "next/head";

import ImageFeed from "../components/ImageFeed"; // Import your ImageFeed component

export default function Home() {
  return (
    <>
      <Head>
        <title>Riff</title>
        <meta name="description" content="Riff Image Feed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-black font-sans text-white">
        <header className="p-4">
          <h1 className="text-2xl">RIFF</h1>
        </header>
        <main>
          <ImageFeed />
        </main>
      </div>
    </>
  );
}
