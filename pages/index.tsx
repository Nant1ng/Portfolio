import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrés Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[rgb(36,36,36)] text-white h-screen">
        <Header />
        <section id="hero">
          <Hero />
        </section>
      </div>
    </>
  );
}
