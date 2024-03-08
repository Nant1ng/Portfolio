import Image from "next/image";

import { urlFor } from "@/sanity";
import { motion } from "framer-motion";
import styled from "styled-components";

import { DESKTOP_BP, TABLET_BP } from "@/utils/breakpoints";
import { Experience } from "@/typings";

type Props = {
  experience: Experience;
};

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  flex-shrink: 0;
  overflow-y: auto;
  width: 300px;
  height: 450px;
  background-color: #292929;
  padding: 2.5rem;
  border-radius: 0.5rem;
  opacity: 0.4;
  cursor: pointer;
  transition: opacity 200ms ease-in-out;
  &:hover {
    opacity: 1;
  }
  ${TABLET_BP} {
    height: 31.25rem;
    width: 37.5rem;
  }
  ${DESKTOP_BP} {
    width: 56.25rem;
  }
  &::-webkit-scrollbar {
    width: 8px;
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

const CardInfo = styled.div`
  padding-left: 0px;
  padding-right: 0px;
  ${TABLET_BP} {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const JobTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 300;
  ${TABLET_BP} {
    font-size: 2.25rem;
  }
`;

const CompanyName = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 0.25rem;
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0;
  ${TABLET_BP} {
    flex-direction: row;
  }
`;

const ExperienceDate = styled.p`
  text-transform: uppercase;
  padding: 1.25rem 0;
  color: #6b7280;
`;

const ExperiencePoints = styled.ul`
  list-style-type: disc;
  padding-left: 1.25rem;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Point = styled.li`
  margin: 0 1.25rem;
`;

function ExperienceCard({ experience }: Props) {
  return (
    <Article>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-16 h-16 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt={experience?.company}
      />
      <CardInfo>
        <JobTitle>{experience?.jobTitle}</JobTitle>
        <CompanyName>{experience?.company}</CompanyName>
        <TechnologiesContainer>
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt={technology.title}
              width={100}
              height={100}
              className="rounded-full w-10 h-10"
            />
          ))}
        </TechnologiesContainer>
        <ExperienceDate>
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </ExperienceDate>
        <ExperiencePoints>
          {experience.points.map((point, index) => (
            <li key={index} className="mx-5">
              {point}
            </li>
          ))}
        </ExperiencePoints>
      </CardInfo>
    </Article>
  );
}

export default ExperienceCard;
