import { urlFor } from "@/sanity";
import { motion } from "framer-motion";

import styled from "styled-components";

import { Skill } from "@/typings";
import { TABLET_BP, XL_DESKTOP_BP } from "@/utils/breakpoints";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const SkillProgress = styled.div`
  position: absolute;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  .group:hover & {
    opacity: 0.8;
    background-color: white;
  }
  ${TABLET_BP} {
    height: 5rem;
    width: 5rem;
  }
  ${XL_DESKTOP_BP} {
    height: 6rem;
    width: 6rem;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ProgressText = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(0 0 0);
  ${TABLET_BP} {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
  ${XL_DESKTOP_BP} {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

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
        alt={skill?.title}
        className="hidden md:block rounded-full border border-gray-500 object-cover h-12 w-12 md:w-20 md:h-20 2xl:w-24 2xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        alt={skill?.title}
        className="md:hidden rounded-full border border-gray-500 object-cover h-12 w-12 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <SkillProgress>
        <Center>
          <ProgressText>
            {skill?.progress}%
          </ProgressText>
        </Center>
      </SkillProgress>
    </div>
  );
}

export default Skill;
