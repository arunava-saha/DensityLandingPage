import React from "react";
import styled from "styled-components";
import { F2G1Svg, F2G2Svg, F2G3Svg, F2imgv1, F2imgv2 } from "../../images";

const ItsTimeTo = styled.p`
  margin: 0;
`;
const GroupChild = styled.img`
  position: absolute;
  height: 102.19%;
  width: 103.43%;
  top: -1.1%;
  right: -1.81%;
  bottom: -1.1%;
  left: -1.61%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupIcon = styled.img`
  position: absolute;
  height: 58.47%;
  width: 76.48%;
  top: 0%;
  right: 12.96%;
  bottom: 41.53%;
  left: 10.56%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const OneAppEndlessContainer = styled.div`
  position: absolute;
  top: 61.96%;
  left: 0%;
  letter-spacing: -0.8px;
  line-height: 40.2px;
  font-weight: 300;
`;
const GroupParent1 = styled.div`
  position: absolute;
  height: 56.8%;
  width: 61.51%;
  top: 20.94%;
  right: 19.1%;
  bottom: 22.26%;
  left: 19.39%;
`;
const GroupDiv = styled.div`
  position: relative;
  width: 276.38px;
  height: 560px;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 100.5%;
  width: 99.99%;
  top: -0.25%;
  right: -0.1%;
  bottom: -0.25%;
  left: 0.1%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupChild2 = styled.img`
  position: absolute;
  height: 31.14%;
  width: 43.42%;
  top: 0%;
  right: 31.38%;
  bottom: 68.86%;
  left: 25.2%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const FutureOfDerivativeContainer = styled.div`
  position: absolute;
  top: 46.66%;
  left: 0%;
  letter-spacing: -0.8px;
  line-height: 40.2px;
  font-weight: 300;
`;
const GroupParent2 = styled.div`
  position: absolute;
  height: 40.51%;
  width: 54.63%;
  top: 24.9%;
  right: 22.54%;
  bottom: 34.59%;
  left: 22.83%;
`;
const IsNowHereContainer = styled.div`
  position: absolute;
  top: 57.5%;
  left: 0%;
  letter-spacing: -0.8px;
  line-height: 40.2px;
  font-weight: 300;
`;
const GroupChild10 = styled.img`
  position: absolute;
  height: 35.41%;
  width: 43.25%;
  top: 0%;
  right: 27.17%;
  bottom: 64.59%;
  left: 29.58%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const IsNowHereForYouParent = styled.div`
  position: absolute;
  height: 34.02%;
  width: 64.04%;
  top: 25.78%;
  right: 17.98%;
  bottom: 40.2%;
  left: 17.98%;
`;
const VectorGroup = styled.div`
  position: relative;
  width: 276.38px;
  height: 560.3px;
`;
const GroupContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
  padding: var(--padding-101xl) 0px 240px;
  gap: var(--gap-101xl);
  font-size: var(--font-size-14xl-5);
`;

export const F2 = () => {
  return (
    <GroupContainer>
      <GroupDiv>
        <VectorIcon alt="" src={F2imgv1} />
        <GroupChild alt="" src={F2imgv2} />
        <GroupParent1>
          <GroupIcon alt="" src={F2G1Svg} />
          <OneAppEndlessContainer>
            <ItsTimeTo>One App.</ItsTimeTo>
            <ItsTimeTo>{`Endless `}</ItsTimeTo>
            <ItsTimeTo>Possibilities</ItsTimeTo>
          </OneAppEndlessContainer>
        </GroupParent1>
      </GroupDiv>
      <GroupDiv>
        <VectorIcon alt="" src={F2imgv1} />
        <GroupChild alt="" src={F2imgv2} />

        <GroupParent2>
          <GroupChild2 alt="" src={F2G2Svg} />
          <FutureOfDerivativeContainer>
            <ItsTimeTo>{`Future of `}</ItsTimeTo>
            <ItsTimeTo>{`Derivative `}</ItsTimeTo>
            <ItsTimeTo>Trading.</ItsTimeTo>
          </FutureOfDerivativeContainer>
        </GroupParent2>
      </GroupDiv>
      <VectorGroup>
        <VectorIcon alt="" src={F2imgv1} />
        <GroupChild alt="" src={F2imgv2} />
        <IsNowHereForYouParent>
          <IsNowHereContainer>
            <ItsTimeTo>{`Is now here, `}</ItsTimeTo>
            <ItsTimeTo>for you.</ItsTimeTo>
          </IsNowHereContainer>
          <GroupChild10 alt="" src={F2G3Svg} />
        </IsNowHereForYouParent>
      </VectorGroup>
    </GroupContainer>
  );
};
