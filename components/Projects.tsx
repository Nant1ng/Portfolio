import { urlFor } from "@/sanity";
import { Project } from "@/typings";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  console.log(projects);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[17.5px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#6b0a7f]/30">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-1 items-center justify-center p-20 md:p-44 h-screen"
          >
            <Link href={project?.linkToBuild} target="_blank">
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt={project?.title}
                className="w-52 md:w-96"
              />
            </Link>
            {projects.isCurrentlyWorkingOn ? (
              <h4 className="text-center text-sm text-gray-400">
                I'm currently working on this project.
              </h4>
            ) : null}
            <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-lg xl:text-2xl font-semibold text-center">
                <span className="underline decoration-[#6b0a7f]/50">
                  Projects {i + 1} of {projects?.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt={technology.title}
                    width={40}
                    height={40}
                    className="rounded-full h-7 w-7 md:h-14 md:w-14"
                  />
                ))}
              </div>
              <p className="text-sm md:text-lg text-center md:text-left">
                {project?.summary}
              </p>
              <p className="text-sm md:text-lg text-center md:text-left">
                Link:{" "}
                <Link
                  href={project?.linkToBuild}
                  target="_blank"
                  className="underline decoration-[#6b0a7f]"
                >
                  {project?.linkToBuild}
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#6b0a7f]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
