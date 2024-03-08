import { motion } from "framer-motion";
import styled from "styled-components";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typings";

type Props = {
  experiences: Experience[];
};

const ExperienceHeading = styled.h3`
  position: absolute;
  top: 3.75rem;
  text-transform: uppercase;
  letter-spacing: 17.5px;
  color: rgb(107 114 128);
  font-size: 1.5rem;
  line-height: 2rem;
`;

const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1.25rem;
  overflow-x: scroll;
  padding: 2.5rem;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(156, 163, 175, 0.2);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(107, 10, 127, 0.3);
    border-radius: 4px;
  }
  scrollbar-color: rgba(107, 10, 127, 0.3) rgba(156, 163, 175, 0.2);
`;

function Experience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <ExperienceHeading>Experience</ExperienceHeading>
      <ExperienceContainer>
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </ExperienceContainer>
    </motion.div>
  );
}

export default Experience;
