import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[17.5px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/aboutImg.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#6b0a7f]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Mitt namn är Andrés jag är född 1999, jag skulle beskriva mig som en
          innovativ webbutvecklare och internet entreprenör som strävar efter
          att skapa en mer enhetlig och sammankopplad värld. Jag behärskar även
          ett flertal olika datastrukturer och programmeringsspråk. Jag tycker
          om utmaningen i att lära mig nya saker och har lätt för att arbeta
          självständigt såväl som att samarbeta i grupp. I övrigt är jag en
          positiv, lugn person som gillar att träna. På fritiden träffar jag
          gärna vänner, är på gymmet och har allt inom mat som passion. Jag
          håller även på med olika hobbyprojekt för att förbättra mina kunskaper
          inom de språken jag redan kan och för att testa på nya språk, CMS och
          tekniker för skojs skull.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
