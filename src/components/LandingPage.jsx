import React from "react";
import styled from "styled-components";
import { Nav } from "./Header";
import {
  F1,
  F10,
  F11,
  F12,
  F13,
  F2,
  F3,
  F4,
  F5,
  F6,
  F7,
  F8,
  F9,
  HeroSection,
} from "./body";
import { Bottom } from "./Footer";

const LandingPageRoot = styled.div`
  position: relative;
  background: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  font-size: var(--font-size-53xl);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
`;

const LandingPage = () => {
  return (
    <LandingPageRoot>
      <Nav />
      <HeroSection />
      <F1 />
      <F2 />
      <F3 />
      <F4 />
      <F5 />
      <F6 />
      <F7 />
      <F8 />
      <F9 />
      <F10 />
      <F11 />
      <F12 />
      <F13 />
      <Bottom />
    </LandingPageRoot>
  );
};

export default LandingPage;
