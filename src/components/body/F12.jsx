import React from "react";
import styled from "styled-components";
import { F12CEO1, F12CEO2, F12CEO3, uliLinkedinSvg } from "../../images";

const MeetTheVisionariesContainer = styled.b`
  position: relative;
  letter-spacing: -2.1px;
  line-height: 76.88px;
  display: inline-block;
  width: 775px;
`;
const NoComplexityOf1 = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 32.85px;
  color: var(--neutrals-grey-4);
  text-align: left;
  display: none;
`;
const AakashNeerajMittal = styled.b`
  position: absolute;
  top: 40px;
  left: 30px;
  letter-spacing: -1px;
  line-height: 40px;
  display: inline-block;
  width: 239px;
`;
const CeoDensity = styled.div`
  position: absolute;
  top: 124px;
  left: 30px;
  font-size: var(--font-size-xl);
  letter-spacing: -1px;
  line-height: 40px;
  color: var(--neutrals-grey-6);
`;
const Image95Icon = styled.img`
  position: absolute;
  top: 94px;
  left: 19px;
  width: 300px;
  height: 300px;
  object-fit: cover;
`;
const UillinkedinIcon = styled.img`
  position: absolute;
  top: 304.16px;
  left: 29px;
  width: 32px;
  height: 32px;
  overflow: hidden;
`;
const FrameParent43 = styled.div`
  position: relative;
  background-color: var(--neutrals-grey-8);
  width: 323px;
  height: 360px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Image94Icon = styled.img`
  position: absolute;
  top: 109.16px;
  left: 19px;
  width: 315px;
  height: 315px;
  object-fit: cover;
`;
const BackedByTheBestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const The = styled.span``;
const PayLess = styled.span`
  color: var(--electric-green-primary);
`;
const ItsTimeTo = styled.p`
  margin: 0;
`;
const EarnMoneyTheEasyWayParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xl);
`;
const Image96Icon = styled.img`
  position: absolute;
  top: 111px;
  left: 29px;
  width: 292px;
  height: 266px;
  object-fit: cover;
`;
const FrameParent42 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: left;
  font-size: var(--font-size-13xl);
`;
const FrameParent41 = styled.div`
  align-self: stretch;
  background-color: var(--neutrals-grey-9);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-121xl) 0px;
  gap: var(--gap-63xl);
`;

export const F12 = () => {
  return (
    <>
      <FrameParent41>
        <BackedByTheBestWrapper>
          <EarnMoneyTheEasyWayParent>
            <MeetTheVisionariesContainer>
              <The>{`Meet the `}</The>
              <PayLess>Visionaries</PayLess>
              <The> behind Density.</The>
            </MeetTheVisionariesContainer>
            <NoComplexityOf1>
              No Complexity of Trading Fee, generate volume and win
            </NoComplexityOf1>
          </EarnMoneyTheEasyWayParent>
        </BackedByTheBestWrapper>
        <FrameParent42>
          <FrameParent43>
            <AakashNeerajMittal>Aakash Neeraj Mittal</AakashNeerajMittal>
            <CeoDensity>CEO, Density</CeoDensity>
            <Image95Icon alt="" src={F12CEO1} />
            <UillinkedinIcon alt="" src={uliLinkedinSvg} />
          </FrameParent43>
          <FrameParent43>
            <AakashNeerajMittal>
              <ItsTimeTo>{`Bhupendra `}</ItsTimeTo>
              <ItsTimeTo>Bule</ItsTimeTo>
            </AakashNeerajMittal>
            <CeoDensity>CTO, Density</CeoDensity>
            <Image94Icon alt="" src={F12CEO2} />
            <UillinkedinIcon alt="" src={uliLinkedinSvg} />
          </FrameParent43>
          <FrameParent43>
            <AakashNeerajMittal>
              <ItsTimeTo>Deepak</ItsTimeTo>
              <ItsTimeTo>Vasman</ItsTimeTo>
            </AakashNeerajMittal>
            <CeoDensity>CBO, Density</CeoDensity>
            <Image96Icon alt="" src={F12CEO3} />
            <UillinkedinIcon alt="" src={uliLinkedinSvg} />
          </FrameParent43>
        </FrameParent42>
      </FrameParent41>
    </>
  );
};
