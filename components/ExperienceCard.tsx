import { urlFor } from "@/sanity";
import { Experience } from "@/typings";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 overflow-y-auto w-[300px] h-[450px] md:h-[550px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#6b0a7f]/30">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-16 h-16 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt={experience?.company}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">
          {experience?.jobTitle}
        </h4>
        <p className="font-bold text-2xl mt-1">{experience?.company}</p>
        <div className="flex flex-wrap md:flex-row space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt={technology.title}
              width={40}
              height={40}
              className="rounded-full"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-500">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points.map((point, index) => (
            <li key={index} className="mx-5">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
