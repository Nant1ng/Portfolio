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
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
        <Header />
        <section id="hero" className="snap-center">
          <Hero />
        </section>
      </div>
    </>
  );
}
