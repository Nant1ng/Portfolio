import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-12 md:top-24 uppercase tracking-[17.5px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/aboutImg.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-28 h-28 md:56 md:56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
      />
      <div className="space-y-3 md:space-y-10 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#6b0a7f]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          I'm Andrés, I enjoy the challenge of learning new things and find it
          easy to work independently as well as collaborate in a group.
          Otherwise, I am a positive, calm person who likes to exercise. In my
          spare time I like to meet friends, go to the gym and have everything
          in food as a passion. I also do various hobby projects to improve my
          skills in the languages ​​I already know and to try new languages, CMS
          and technologies for fun.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
