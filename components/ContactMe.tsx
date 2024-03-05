import { PageInfo } from "@/typings";

import styled from "styled-components";

import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { TABLET_BP } from "@/utils/breakpoints";

type Props = {
  socials: PageInfo;
};

const ContactContainer = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: center;
  max-width: 80rem;
  padding: 2.5rem;
  justify-content: space-evenly;
  margin: auto;
  align-items: center;
  ${TABLET_BP} {
    flex-direction: row;
    text-align: left;
  }
`;

const Heading = styled.h3`
  position: absolute;
  top: 6rem;
  text-transform: uppercase;
  letter-spacing: 17.5px;
  color: #6b7280;
  font-size: 1.5rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const ContactHeading = styled.h4`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 600;
  text-align: center;
`;

const HighlightText = styled.span`
  text-decoration: underline;
  text-decoration-color: #6b0a7f;
`;

const SpaceYContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

const ContactParagraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

function ContactMe({ socials }: Props) {
  return (
    <ContactContainer>
      <Heading>Contact</Heading>
      <FlexContainer>
        <ContactHeading>
          If you have any questions or just want to get to know me better, feel
          free to <HighlightText>call or email me!</HighlightText>
        </ContactHeading>
        <SpaceYContainer>
          <CenterContainer>
            <PhoneIcon className="text-[#6b0a7f] h-7 w-7 animate-pulse" />
            <ContactParagraph>{socials?.phoneNumber}</ContactParagraph>
          </CenterContainer>
          <CenterContainer>
            <EnvelopeIcon className="text-[#6b0a7f] h-7 w-7 animate-pulse" />
              <ContactParagraph>{socials?.email}</ContactParagraph>
          </CenterContainer>
        </SpaceYContainer>
      </FlexContainer>
    </ContactContainer>
  );
}

export default ContactMe;
