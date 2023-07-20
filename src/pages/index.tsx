import Head from "next/head";

import ImageFeed from "../components/ImageFeed"; // Import your ImageFeed component

export default function Home() {
  const names = [
    "can",
    "tableware",
    "late",
    "tickets",
    "meat",
    "oldcar",
    "oldcar2",
    "vacation",
    "",
    "0",
    "balloons",
    "bread",
    "breakd",
    "cake",
    "cheese",
    "coffee",
    "doughnut",
    "egg",
    "icecream",
    "office",
    "pakchoy",
    "pills",
    "pizza",
    "plant",
    "puppy",
    "weather",
  ];

  const NameBoxes: React.FC = () => {
    return (
      <div className="flex flex-row flex-wrap items-center gap-2 p-4">
        {names.map((name, index) => (
          <div
            key={index}
            className="inline-block border border-white px-2 text-sm font-light"
          >
            {name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Riff</title>
        <meta name="description" content="Riff Image Feed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-black font-sans text-white">
        <header className="p-4">
          <div className="text-2xl font-normal">
            MIDJOURNEY GENERATED HIGHLY AESTHETIC CURATED FREE PNG ASSETS
          </div>
        </header>
        <main>
          <NameBoxes />
          <ImageFeed />
        </main>
      </div>
    </>
  );
}
