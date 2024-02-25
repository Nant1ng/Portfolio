import Image from "next/image";
import Link from "next/link";

import BackgroundCircles from "./BackgroundCircles";
import { LAPTOP_BP } from "../utils/breakpoints";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { urlFor } from "@/sanity";
import styled from "styled-components";

import { PageInfo } from "@/typings";

type Props = {
  pageInfo: PageInfo;
};

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;

const ZIndex = styled.div`
  z-index: 20;
`;

const Role = styled.h2`
  font-size: 1rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  color: #6b7280;
  padding-bottom: 0.5rem;
  letter-spacing: 10px;
`;

const TypeWriter = styled.h1`
  font-size: 3rem;
  line-height: 1;
  font-weight: 600;
  padding: 0 2.5rem;
  ${LAPTOP_BP} {
    font-size: 3.75rem;
  }
`;

const LinkButtons = styled.div`
  padding-top: 1.25rem;
`;

function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo?.name}`,
      "Self-Proclaimed-Master-Chef.tsx",
      "Guy-Who-Loves-To-Workout.tsx",
      "<But-Loves-To-Code-More />",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 50,
    deleteSpeed: 50,
  });

  return (
    <HeroContainer>
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt={`Profile picture of ${pageInfo?.name}`}
        width={100}
        height={100}
        priority
      />
      <ZIndex>
        <Role>{pageInfo?.role}</Role>
        <TypeWriter>
          <span>
            {text} <Cursor cursorColor="#6b0a7f" />
          </span>
        </TypeWriter>
        <LinkButtons>
          <Link href="#about">
            <button className="heroButton" aria-label="Learn more about me">
              About
            </button>
          </Link>
          <Link href="#experience">
            <button className="heroButton" aria-label="View my work experience">
              Experience
            </button>
          </Link>
          <Link href="#skills">
            <button className="heroButton" aria-label="Explore my skills">
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button className="heroButton" aria-label="See my projects">
              Projects
            </button>
          </Link>
        </LinkButtons>
      </ZIndex>
    </HeroContainer>
  );
}

export default Hero;
