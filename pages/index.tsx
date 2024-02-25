import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { HTMLAttributes } from "react";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

import { fetchPageInfo } from "@/lib/fetchPageInfo";
import { fetchExperiences } from "@/lib/fetchExperiences";
import { fetchSkills } from "@/lib/fetchSkills";
import { fetchProjects } from "@/lib/fetchProjects";
import { fetchSocials } from "@/lib/fetchSocials";

import styled from "styled-components";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

import { Experience, PageInfo, Project, Skill, Social } from "@/typings";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

interface ScrollSnapProps extends HTMLAttributes<HTMLElement> {}

const Container = styled.div`
  background-color: #242424;
  color: #ffffff;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 0;
  scroll-snap-type: y mandatory;

  &::-webkit-scrollbar {
    width: 10rem;
  }

  &::-webkit-scrollbar-track {
    background: #66666620;
  }

  &::-webkit-scrollbar-thumb {
    background: #6b0a7f4d;
    border-radius: 6px;
  }
  scrollbar-width: 1rem;
  scrollbar-color: #6b0a7f4d #66666620;
`;

const SnapStart = styled.section<ScrollSnapProps>`
  scroll-snap-align: start;
`;

const SnapCenter = styled.section<ScrollSnapProps>`
  scroll-snap-align: center;
`;

const Footer = styled.footer`
  position: sticky;
  bottom: 1.25rem;
  width: 100vw;
  cursor: pointer;
`;

const ArrowUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
}: Props) {
  return (
    <>
      {/*
        Hans 
        Twitter/X, Open Graph 
        Bra, Dåligt
        ????  
      */}
      <Head>
        <title>Andrés Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Andrés' Portfolio - showcasing projects, skills, and professional experiences."
        />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2F2F2F" />
      </Head>
      <Container>
        <Header socials={socials} />
        <SnapStart id="hero">
          <Hero pageInfo={pageInfo} />
        </SnapStart>
        <SnapCenter id="about">
          <About pageInfo={pageInfo} />
        </SnapCenter>
        <SnapCenter id="experience">
          <WorkExperience experiences={experiences} />
        </SnapCenter>
        <SnapStart id="skills">
          <Skills skills={skills} />
        </SnapStart>
        <SnapStart id="projects">
          <Projects projects={projects} />
        </SnapStart>
        <SnapStart id="contact">
          <ContactMe socials={pageInfo} />
        </SnapStart>
        <Link href="#hero">
          <Footer>
            <ArrowUpContainer>
              <ArrowUpCircleIcon className="h-10 w-10 text-[#6b0a7f] filter grayscale-[75%] hover:grayscale-0 cursor-pointer" />
            </ArrowUpContainer>
          </Footer>
        </Link>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 3600,
  };
};
