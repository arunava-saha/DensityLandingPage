import React from "react";
import styled from "styled-components";
import { FrameSvg } from "../images";

const FrameIcon = styled.img`
  position: relative;
  width: 100px;
  height: 34px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Career = styled.div`
  position: relative;
`;
const CareerParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 34px;
`;
const TradeNow = styled.b`
  position: relative;
  text-transform: uppercase;
`;
const TradeNowWrapper = styled.div`
  border-radius: var(--br-5xs);
  background: linear-gradient(85.85deg, #d4f938 29.17%, #32d875);
  box-shadow: 0px 0px 16px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(10px);
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-base) 32px;
  box-sizing: border-box;
  font-size: var(--font-size-base);
  color: var(--color-black);
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 56px;
`;
const TopNav = styled.div`
  align-self: stretch;
  background-color: rgba(42, 93, 50, 0.2);
  backdrop-filter: blur(40px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px 216px;
  gap: 387px;
  text-align: left;
  font-size: 14px;
  color: #fcfcfc;
  width: 70.5%;
  position: fixed;
  z-index: 10;
`;

export const Nav = () => {
  return (
    <TopNav>
      <FrameIcon alt="" src={FrameSvg} />
      <FrameParent>
        <CareerParent>
          <Career>Career</Career>
          <Career>Blogs</Career>
          <Career>Leaderboard</Career>
          <Career>Fees</Career>
        </CareerParent>
        <TradeNowWrapper>
          <TradeNow>Trade Now</TradeNow>
        </TradeNowWrapper>
      </FrameParent>
    </TopNav>
  );
};
