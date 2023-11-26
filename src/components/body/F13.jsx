import React from "react";
import styled from "styled-components";
import { F2G3Svg, F2imgv1, F2imgv2, FooterHeadSvg } from "../../images";

const GetStartedNow = styled.b`
  position: absolute;
  bottom: 1069.58px;
  left: 0px;
  letter-spacing: -2.78px;
  background: linear-gradient(176.64deg, #fff, rgba(255, 255, 255, 0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const GroupChild15 = styled.img`
  position: absolute;
  bottom: -7.65px;
  left: 225.35px;
  width: 557.31px;
  height: 1124.35px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: #43d46b;
  filter: blur(51.49px);
  width: 875.97px;
  height: 142.63px;
  opacity: 0.6;
`;
const Cta = styled.div`
  position: absolute;
  bottom: 6.26px;
  left: 4.87px;
  background: linear-gradient(
    268.92deg,
    #d4f938 43.75%,
    rgba(50, 216, 117, 0.96)
  );
  width: 866.23px;
  height: 134.98px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 11.13222599029541px 33.39667892456055px;
  box-sizing: border-box;
`;
const Career1 = styled.b`
  position: relative;
  font-family: "Neurial Grotesk-Bold", Helvetica;
`;
const RectangleGroup = styled.div`
  position: absolute;
  bottom: 58.44px;
  left: 67px;
  width: 875.97px;
  height: 142.63px;
  font-size: 38.27px;
`;
const GetStartedNowParent = styled.div`
  position: relative;
  width: 1011px;
  height: 1228.58px;
`;
const LandingPageChild = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-141xl) 0px;
  text-align: left;
  font-size: 132.2px;
  color: var(--color-black);
`;
const GroupChild = styled.img`
  position: absolute;
  height: 102.19%;
  width: 70%;
  top: 9%;
  right: 0%;
  bottom: -1.1%;
  left: 15%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 100.5%;
  width: 71%;
  top: 10%;
  right: -0.1%;
  bottom: -0.25%;
  left: 15%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const FooterChild = styled.img`
  position: absolute;
  top: -20%;
  left: 34%;
  width: 30%;
  height: 1124.35px;
`;

export const F13 = () => {
  return (
    <>
      <LandingPageChild>
        <GetStartedNowParent>
          <GetStartedNow>Get started now.</GetStartedNow>
          <VectorIcon alt="" src={F2imgv1} />
          <GroupChild alt="" src={F2imgv2} />
          <FooterChild alt="" src={FooterHeadSvg} />
          <GroupChild15 alt="" src={F2G3Svg} />
          <RectangleGroup>
            <RectangleDiv />
            <Cta>
              <Career1>Start Trading!</Career1>
            </Cta>
          </RectangleGroup>
        </GetStartedNowParent>
      </LandingPageChild>
    </>
  );
};
