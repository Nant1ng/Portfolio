import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity";
import { motion } from "framer-motion";
import styled from "styled-components";

import { Project } from "@/typings";
import { DESKTOP_BP, LAPTOP_BP, TABLET_BP } from "@/utils/breakpoints";

type Props = {
  projects: Project[];
};

interface ProjectCardProps {
  key?: string;
}

const ProjectsHeading = styled.h3`
  position: absolute;
  top: 6rem;
  text-transform: uppercase;
  letter-spacing: 17.5px;
  color: rgb(107 114 128);
  font-size: 1.5rem;
  line-height: 2rem;
`;

const ProjectContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  z-index: 20;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #66666633;
  }
  &::-webkit-scrollbar-thumb {
    background: #6b0a7f4d;
    border-radius: 4px;
  }
  scrollbar-color: #6b0a7f4d #66666633;
`;

const ProjectCard = styled.div<ProjectCardProps>`
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  ${TABLET_BP} {
    padding: 11rem;
  }
`;

const WorkingOnTag = styled.h4`
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(156 163 175);
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 0 0;
  max-width: 96rem;
  margin: 0 auto;
  ${TABLET_BP} {
    gap: 1.25rem;
    padding: 0 2.5rem;
  }
  ${LAPTOP_BP} {
    gap: 2.5rem;
  }
`;

const ProjectTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  text-align: center;
  ${DESKTOP_BP} {
    font-size: 1.5rem;
  }
`;

const Highlight = styled.span`
  text-decoration: underline;
  text-decoration-color: #6b0a7f;
`;

const TechnologyContainer = styled.div`
  display: flex;
  align-items: center; /* Aligns items vertically in the center */
  justify-content: center; /* Centers content horizontally */
  gap: 1rem; /* Equivalent to space-x-2, creates space between child elements horizontally */
`;

const Text = styled.p`
  font-size: 0.875rem;
  text-align: center;
  ${TABLET_BP} {
    font-size: 1.125rem;
    text-align: left;
  }
`;

const SkewedDiv = styled.div`
  width: 100%;
  position: absolute;
  top: 20%;
  background-color: rgba(107, 10, 127, 0.1);
  left: 0;
  height: 500px;
  transform: skewY(-12deg);
`;

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <ProjectsHeading>Projects</ProjectsHeading>
      <ProjectContainer>
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-1 items-center justify-center p-20 md:p-44 h-screen"
          >
            <Link
              href={project?.linkToBuild}
              target="_blank"
              aria-label={`View ${project?.title} project`}
            >
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt={project?.title}
                className="w-52 md:w-52 lg:w-72"
              />
            </Link>
            {project.isCurrentlyWorkingOn ? (
              <WorkingOnTag>
                I&apos;m currently working on this project.
              </WorkingOnTag>
            ) : null}
            <ProjectInfo>
              <ProjectTitle>
                <Highlight>
                  Projects {i + 1} of {projects?.length}:
                </Highlight>{" "}
                {project?.title}
              </ProjectTitle>
              <TechnologyContainer>
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt={technology.title}
                    width={100}
                    height={100}
                    priority={i < 2}
                    className="rounded-full h-7 w-7 md:h-10 md:w-10 lg:h-14 lg:w-14"
                  />
                ))}
              </TechnologyContainer>
              <Text>{project?.summary}</Text>
              <Text>
                Link:{" "}
                <Link
                  href={project?.linkToBuild}
                  target="_blank"
                  aria-label={`Open ${project?.title} project in new tab`}
                  className="underline decoration-[#6b0a7f]"
                >
                  {project?.linkToBuild}
                </Link>
              </Text>
            </ProjectInfo>
          </div>
        ))}
      </ProjectContainer>
      <SkewedDiv />
    </motion.div>
  );
}

export default Projects;
