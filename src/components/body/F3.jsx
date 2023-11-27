import React from "react";
import styled from "styled-components";
import { F3imgPng, F3FrameSvg, F3img1Png } from "../../images";

const The = styled.span``;
const PayLess = styled.span`
  color: var(--electric-green-primary);
`;
const TradeMorePayContainer = styled.b`
  position: relative;
  letter-spacing: -2.1px;
  line-height: 76.88px;
`;
const OurLowFees = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 32.85px;
  color: var(--neutrals-grey-4);
  display: inline-block;
  width: 659.09px;
`;
const TradeMorePayLessParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const B3 = styled.b`
  position: relative;
  letter-spacing: -1.69px;
  line-height: 50.63px;
`;
const TakerFees = styled.div`
  position: relative;
  font-size: var(--font-size-xl);
  letter-spacing: -1.69px;
  opacity: 0.5;
`;
const Parent11 = styled.div`
  position: absolute;
  top: 281px;
  left: calc(50% - 42.33px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Parent2 = styled.div`
  position: absolute;
  top: 148px;
  left: calc(50% - 45.83px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image92Icon = styled.img`
  position: absolute;
  top: 55px;
  left: calc(50% - 73.33px);
  width: 146px;
  height: 30px;
  object-fit: cover;
  opacity: 0.5;
`;
const FrameParent1 = styled.div`
  flex: 1;
  position: relative;
  background-color: var(--neutrals-grey-9);
  height: 438px;
  overflow: hidden;
`;
const TakerFees1 = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  letter-spacing: -1.69px;
  opacity: 0.5;
`;
const Parent3 = styled.div`
  position: absolute;
  top: 281px;
  left: calc(50% - 52.33px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
`;
const Parent4 = styled.div`
  position: absolute;
  top: 148px;
  left: calc(50% - 56.33px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
`;
const FrameIcon3 = styled.img`
  position: relative;
  width: 183.25px;
  height: 44px;
  overflow: hidden;
  flex-shrink: 0;
`;
const FrameWrapper = styled.div`
  position: absolute;
  top: 52px;
  left: calc(50% - 100.33px);
  box-shadow: 0px 0px 30px #e2ff6f;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameParent2 = styled.div`
  flex: 1;
  position: relative;
  background: linear-gradient(
    179.64deg,
    #daf760 17.19%,
    rgba(50, 216, 117, 0.96)
  );
  box-shadow: 0px 0px 40px rgba(226, 255, 111, 0.8);
  height: 438px;
  overflow: hidden;
  font-size: var(--font-size-21xl);
  color: var(--color-black);
`;
const Image93Icon = styled.img`
  position: absolute;
  top: 45px;
  left: calc(50% - 95.67px);
  width: 192px;
  height: 61px;
  object-fit: cover;
  opacity: 0.7;
`;
const FrameDiv = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px var(--padding-131xl);
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-13xl);
`;
const FrameContainer = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Neurial Grotesk-Bold", Helvetica;
  justify-content: flex-start;
  padding: var(--padding-121xl) 0px;
  gap: var(--gap-63xl);
`;

export const F3 = () => {
  return (
    <FrameContainer>
      <TradeMorePayLessParent>
        <TradeMorePayContainer>
          <The>{`Trade More. `}</The>
          <PayLess>Pay Less.</PayLess>
        </TradeMorePayContainer>
        <OurLowFees>Our low Fees Supercharge Your Profits</OurLowFees>
      </TradeMorePayLessParent>
      <FrameDiv>
        <FrameParent1>
          <Parent11>
            <B3>0.07</B3>
            <TakerFees>Taker Fees</TakerFees>
          </Parent11>
          <Parent2>
            <B3>0.025</B3>
            <TakerFees>Maker Fees</TakerFees>
          </Parent2>
          <Image92Icon alt="" src={F3imgPng} />
        </FrameParent1>
        <FrameParent2>
          <Parent3>
            <B3>0.04</B3>
            <TakerFees1>Taker Fees</TakerFees1>
          </Parent3>
          <Parent4>
            <B3>0.02</B3>
            <TakerFees1>Maker Fees</TakerFees1>
          </Parent4>
          <FrameWrapper>
            <FrameIcon3 alt="" src={F3FrameSvg} />
          </FrameWrapper>
        </FrameParent2>
        <FrameParent1>
          <Parent11>
            <B3>0.05</B3>
            <TakerFees>Taker Fees</TakerFees>
          </Parent11>
          <Parent2>
            <B3>0.02</B3>
            <TakerFees>Maker Fees</TakerFees>
          </Parent2>
          <Image93Icon alt="" src={F3img1Png} />
        </FrameParent1>
      </FrameDiv>
    </FrameContainer>
  );
};
