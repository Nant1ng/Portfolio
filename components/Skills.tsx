import { motion } from "framer-motion";
import Skill from "./Skill";
import styled from "styled-components";
import { Skill as SkillType } from "@/typings";

type Props = {
  skills: SkillType[];
};

const SkillsHeading = styled.h3`
  position: absolute;
  top 6rem;
  text-transform: uppercase;
  letter-spacing: 17.5px;
  color: rgb(107 114 128);
  font-size: 1.5rem;
  line-height: 2rem;
`;

const InfoText = styled.h3`
  position: absolute;
  top: 9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: rgb(107 114 128);
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
  margin-top: 2.5rem;
`;

function Skills({ skills }: Props) {
  const filteredSkills = skills.filter(
    (_, index) => ![0, 6, 10, 11, 14].includes(index)
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <SkillsHeading>Skills</SkillsHeading>
      <InfoText>Hover over a skill for current proficiency</InfoText>
      <SkillGrid>
        {filteredSkills?.slice(0, filteredSkills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {filteredSkills
          ?.slice(filteredSkills.length / 2, filteredSkills.length)
          .map((skill) => (
            <Skill key={skill._id} skill={skill} directionLeft />
          ))}
      </SkillGrid>
    </motion.div>
  );
}

export default Skills;
