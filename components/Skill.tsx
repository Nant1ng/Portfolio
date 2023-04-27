import { urlFor } from "@/sanity";
import { Skill } from "@/typings";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="hidden md:block rounded-full border border-gray-500 object-cover md:w-24 md:h-24 2xl:w-28 2xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="md:hidden rounded-full border border-gray-500 object-cover h-12 w-12 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-12 w-12 md:w-24 md:h-24 2xl:w-28 2xl:h-28  rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-3xl 2xl:text-4xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
