import React from "react";
import styled from "styled-components";
import {
  FaceBookSvg,
  FooterHeadSvg,
  InstagramSvg,
  LinkedinSvg,
  TwitterSvg,
} from "../images";
const FooterChild = styled.img`
  position: relative;
  width: 127.31px;
  height: 29.26px;
`;
const Fees1 = styled.div`
  position: absolute;
  top: 0px;
  left: 83.41px;
`;
const Blog = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const Leaderboard1 = styled.div`
  position: absolute;
  top: 0px;
  left: 168.16px;
`;
const ContactUs = styled.div`
  position: absolute;
  top: 0px;
  left: 413.05px;
`;
const Careers = styled.div`
  position: absolute;
  top: 0px;
  left: 306.95px;
`;
const PrivacyPolicy = styled.div`
  position: absolute;
  top: 0px;
  left: 539.17px;
`;
const FeesParent = styled.div`
  position: relative;
  width: 628.17px;
  height: 17px;
`;
const LremIpsumOd = styled.div`
  position: relative;
  line-height: 24px;
  color: #ddd;
  text-align: center;
  display: inline-block;
  width: 786.88px;
`;
const FooterItem = styled.img`
  position: relative;
  padding-left: 10px;
  width: 20%;
  height: 32.03px;
`;
const UnlockNewFrontiersParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xl);
`;
const Foot = styled.div`
  align-self: stretch;
  background-color: #229851;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 63px 245px;
  gap: var(--gap-21xl);
  text-align: left;
  font-size: var(--mobile-subheading-medium-size);
`;

export const Bottom = () => {
  return (
    <Foot>
      <FooterChild alt="" src={FooterHeadSvg} />
      <UnlockNewFrontiersParent>
        <FeesParent>
          <Fees1>Fees</Fees1>
          <Blog>Blog</Blog>
          <Leaderboard1>Leaderboard</Leaderboard1>
          <ContactUs>Contact Us</ContactUs>
          <Careers>Careers</Careers>
          <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
        </FeesParent>
        <LremIpsumOd>{`Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. `}</LremIpsumOd>
      </UnlockNewFrontiersParent>
      <FeesParent>
        <FooterItem alt="" src={FaceBookSvg} />
        <FooterItem alt="" src={TwitterSvg} />
        <FooterItem alt="" src={LinkedinSvg} />
        <FooterItem alt="" src={InstagramSvg} />
      </FeesParent>
    </Foot>
  );
};
