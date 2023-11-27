import React from "react";
import styled from "styled-components";
import { F1v1Svg } from "../../images";

const Career1 = styled.b`
  position: relative;
  font-family: "Neurial Grotesk-Bold", Helvetica;
`;
const ConversionFee = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 26px;
  font-weight: 500;
  color: var(--color-darkgray-100);
`;
const Parent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
`;
const FrameChild = styled.img`
  position: relative;
  width: 1.5px;
  height: 200px;
`;
const FrameGroup = styled.div`
  align-self: stretch;
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 10px rgba(235, 255, 37, 0.2);
  backdrop-filter: blur(52.5px);
  height: 171px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const LandingPageInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  background: #000;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-197xl);
  text-align: left;
  font-size: var(--font-size-21xl);
  color: var(--electric-green-primary);
`;

export const F1 = () => {
  return (
    <LandingPageInner>
      <FrameGroup>
        <Parent1>
          <Career1>00%</Career1>
          <ConversionFee>{`Conversion Fee `}</ConversionFee>
        </Parent1>
        <FrameChild alt="" src={F1v1Svg} />
        <Parent1>
          <Career1>500 Mn+</Career1>
          <ConversionFee>Lifetime Volume Traded</ConversionFee>
        </Parent1>
        <FrameChild alt="" src={F1v1Svg} />
        <Parent1>
          <Career1>250+</Career1>
          <ConversionFee>Total Tradable Pairs</ConversionFee>
        </Parent1>
        <FrameChild alt="" src={F1v1Svg} />
        <Parent1>
          <Career1>15,000+</Career1>
          <ConversionFee>Traders</ConversionFee>
        </Parent1>
      </FrameGroup>
    </LandingPageInner>
  );
};
