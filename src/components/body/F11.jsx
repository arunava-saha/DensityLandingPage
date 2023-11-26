import React from "react";
import styled from "styled-components";
import { F11img, F1v1Svg } from "../../images";

const FrameWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Parent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-9xs);
`;
const The = styled.span``;
const PayLess = styled.span`
  color: var(--electric-green-primary);
`;
const TradeMorePayContainer = styled.b`
  position: relative;
  letter-spacing: -2.1px;
  line-height: 76.88px;
`;
const FrameChild4 = styled.img`
  position: relative;
  width: 2px;
  height: 80%;
`;
const Career1 = styled.b`
  position: relative;
  font-family: "Neurial Grotesk-Bold", Helvetica;
`;
const ExploreMarketsWrapper = styled.div`
  border-radius: var(--br-5xs);
  background: linear-gradient(85.85deg, #d4f938 29.17%, #32d875);
  box-shadow: 0px 0px 16px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(10px);
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-29xl);
  box-sizing: border-box;
  font-size: var(--mobile-title-3-medium-size);
  color: var(--color-black);
`;
const TradeNow = styled.b`
  position: relative;
  text-transform: uppercase;
`;
const NoComplexityOf = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 32.85px;
  color: var(--neutrals-grey-4);
  text-align: left;
`;
const EarnMoneyTheEasyWayParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xl);
`;
const DailyVolumeTraded = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 26px;
  color: var(--color-darkgray-100);
`;
const FrameParent40 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--color-gray-300);
  backdrop-filter: blur(52.5px);
  border: 1px solid var(--color-gray-200);
  box-sizing: border-box;
  width: 1140px;
  height: 171px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: var(--font-size-13xl);
`;
const FrameParent39 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-121xl) 0px;
  gap: var(--gap-63xl);
  background-image: url(${F11img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: left;
`;

export const F11 = () => {
  return (
    <>
      <FrameParent39>
        <FrameWrapper2>
          <EarnMoneyTheEasyWayParent>
            <TradeMorePayContainer>
              <The>{`Trade Together. `}</The>
              <PayLess>Thrive Together.</PayLess>
            </TradeMorePayContainer>
            <NoComplexityOf>
              Join the fun-filled community on our platform.
            </NoComplexityOf>
          </EarnMoneyTheEasyWayParent>
        </FrameWrapper2>
        <FrameParent40>
          <Parent1>
            <Career1>10,000+</Career1>
            <DailyVolumeTraded>Traders</DailyVolumeTraded>
          </Parent1>
          <FrameChild4 alt="" src={F1v1Svg} />
          <Parent1>
            <Career1>100Mn</Career1>
            <DailyVolumeTraded>Daily Volume Traded</DailyVolumeTraded>
          </Parent1>
          <FrameChild4 alt="" src={F1v1Svg} />
          <Parent1>
            <Career1>Daily</Career1>
            <DailyVolumeTraded>Trade Analysis</DailyVolumeTraded>
          </Parent1>
          <FrameChild4 alt="" src={F1v1Svg} />
          <Parent1>
            <Career1>Live</Career1>
            <DailyVolumeTraded>Signals</DailyVolumeTraded>
          </Parent1>
        </FrameParent40>
        <ExploreMarketsWrapper>
          <TradeNow>Join community</TradeNow>
        </ExploreMarketsWrapper>
      </FrameParent39>
    </>
  );
};
