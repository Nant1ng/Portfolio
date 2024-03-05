import Link from "next/link";
import { DESKTOP_BP, TABLET_BP } from "../utils/breakpoints";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Social } from "@/typings";

type Props = {
  socials: Social[];
};

const Navbar = styled.header`
  position: sticky;
  top: 0;
  padding: 1.25rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;
  ${DESKTOP_BP} {
    align-items: center;
  }
`;

const ContactBtn = styled.p`
  display: none;
  ${TABLET_BP} {
    display: inline-flex;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

function Header({ socials }: Props) {
  return (
    <Navbar>
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="currentColor"
            bgColor="transparent"
            className="text-gray-500 hover:text-gray-300"
            target="_blank"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-500 hover:text-gray-300"
      >
        <SocialIcon
          url="#contact"
          network="email"
          fgColor="currentColor"
          bgColor="transparent"
        />
        <Link href="#contact" aria-label="Get in touch - Go to contact section">
          <ContactBtn>Get In Touch</ContactBtn>
        </Link>
      </motion.div>
    </Navbar>
  );
}

export default Header;
