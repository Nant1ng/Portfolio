import { urlFor } from "@/sanity";
import { PageInfo } from "@/typings";

import { motion } from "framer-motion";
import styled from "styled-components";

import { TABLET_BP } from "@/utils/breakpoints";

type Props = {
  pageInfo: PageInfo;
};

const Heading = styled.h3`
  position: absolute;
  top: 3rem;
  text-transform: uppercase;
  letter-spacing: 17.5px;
  color: #6b7280;
  font-size: 1.5rem;
  ${TABLET_BP} {
    top: 6rem;
  }
`;

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0;
  ${TABLET_BP} {
    gap: 2.5rem;
    padding: 0 2.5rem;
  }
`;

const BackgroundHeading = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  ${TABLET_BP} {
    font-size: 2.25rem;
  }
`;

const HighlightSpan = styled.span`
  text-decoration: underline;
  text-decoration-color: #6b0a7f;
  text-decoration-thickness: auto;
`;

const BackgroundParagraph = styled.p`
  font-size: 0.875rem;
  overflow-y: auto;
  height: 14rem;
  padding-right: 0.5rem;
  scrollbar-width: thin;
  scrollbar-color: #6b0a7f #666666;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: #666666;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #6b0a7f;
    border-radius: 1.25rem;
  }
  ${TABLET_BP} {
    height: auto;
    padding-right: 0;
  }
`;

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <Heading>About</Heading>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-28 h-28 md:56 md:56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
      />
      <BackgroundContainer>
        <BackgroundHeading>
          Here is a <HighlightSpan>little</HighlightSpan> background
        </BackgroundHeading>
        <BackgroundParagraph>
          {pageInfo?.backgroundInformation}
        </BackgroundParagraph>
      </BackgroundContainer>
    </motion.div>
  );
}

export default About;
