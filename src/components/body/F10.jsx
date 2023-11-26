import React from "react";
import styled from "styled-components";
import { F10g1, F10g2, F10g3, F10g4 } from "../../images";

const FrameChild29 = styled.img`
  position: relative;
  width: 247.72px;
  height: 228.77px;
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
const GroupParent24 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-21xl);
  text-align: center;
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
const ItsTimeTo = styled.p`
  margin: 0;
`;
const FrameIcon10 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 279.96px;
  height: 239.01px;
  overflow: hidden;
  opacity: 0.55;
  mix-blend-mode: multiply;
`;
const TradeNow = styled.b`
  position: relative;
  text-transform: uppercase;
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
const ShareYourYour = styled.b`
  position: absolute;
  bottom: 39px;
  left: 26px;
  letter-spacing: -1px;
  line-height: 40px;
  display: inline-block;
  width: 239px;
`;
const FrameChild30 = styled.img`
  position: absolute;
  top: 33px;
  left: 30px;
  width: 103.69px;
  height: 90.4px;
`;
const TextureIcon8 = styled.img`
  position: absolute;
  height: 101.24%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: -1.24%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const FrameParent36 = styled.div`
  position: relative;
  background-color: var(--neutrals-grey-9);
  width: 323px;
  height: 323px;
  overflow: hidden;
  flex-shrink: 0;
`;
const InviteFriendsTo = styled.b`
  position: absolute;
  bottom: 39px;
  left: 26px;
  letter-spacing: -1px;
  line-height: 40px;
  display: inline-block;
  width: 264px;
`;
const FrameChild31 = styled.img`
  position: absolute;
  height: 29.8%;
  width: 33.63%;
  top: 11.15%;
  right: 56.66%;
  bottom: 59.06%;
  left: 9.72%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const FrameChild32 = styled.img`
  position: absolute;
  height: 32.36%;
  width: 30.03%;
  top: 9.6%;
  right: 61.92%;
  bottom: 58.05%;
  left: 8.05%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const FrameParent35 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
  font-size: var(--font-size-13xl);
`;
const FrameParent34 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-121xl) 0px;
  gap: var(--gap-63xl);
  text-align: left;
`;

export const F10 = () => {
  return (
    <>
      <FrameParent34>
        <GroupParent24>
          <FrameChild29 alt="" src={F10g1} />
          <EarnMoneyTheEasyWayParent>
            <TradeMorePayContainer>
              <The>{`Earn Money. `}</The>
              <PayLess>The Easy Way.</PayLess>
            </TradeMorePayContainer>
            <NoComplexityOf>
              No Complexity of Trading Fee, generate volume and win
            </NoComplexityOf>
          </EarnMoneyTheEasyWayParent>
        </GroupParent24>
        <FrameParent35>
          <FrameParent36>
            <ShareYourYour>Share your your referral link</ShareYourYour>
            <FrameChild30 alt="" src={F10g2} />
          </FrameParent36>
          <FrameParent36>
            <InviteFriendsTo>
              Invite Friends to Trade on Density
            </InviteFriendsTo>
            <FrameChild31 alt="" src={F10g3} />
          </FrameParent36>
          <FrameParent36>
            <ShareYourYour>
              <ItsTimeTo>{`Trade `}</ItsTimeTo>
              <ItsTimeTo>and Earn</ItsTimeTo>
            </ShareYourYour>
            <FrameChild32 alt="" src={F10g4} />
          </FrameParent36>
        </FrameParent35>
        <ExploreMarketsWrapper>
          <TradeNow>start earning now</TradeNow>
        </ExploreMarketsWrapper>
      </FrameParent34>
    </>
  );
};
