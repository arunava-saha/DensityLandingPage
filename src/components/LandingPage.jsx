import React from "react";
import styled from "styled-components";
import { F2G1Svg, F2G2Svg, F2G3Svg } from "../images";
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
const GroupItem = styled.div`
  position: absolute;
  height: 3.09%;
  width: 1.01%;
  top: 59.02%;
  right: 98.99%;
  bottom: 37.89%;
  left: 0%;
  border-radius: 50%;
  filter: blur(4.47px);
  opacity: 0.4;
`;
const GroupInner = styled.div`
  position: absolute;
  height: 4.29%;
  width: 1.01%;
  top: 23.13%;
  right: -1.01%;
  bottom: 72.58%;
  left: 100%;
  border-radius: 50%;
  filter: blur(4.47px);
  transform: rotate(180deg);
  transform-origin: 0 0;
  opacity: 0.5;
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
  border: 1px solid red;
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
const VectorIcon2 = styled.img`
  position: absolute;
  height: 100.44%;
  width: 99.99%;
  top: -0.25%;
  right: -0.1%;
  bottom: -0.2%;
  left: 0.1%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon3 = styled.img`
  position: absolute;
  height: 102.14%;
  width: 103.58%;
  top: -1.04%;
  right: -1.79%;
  bottom: -1.1%;
  left: -1.79%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon4 = styled.img`
  position: absolute;
  height: 1.45%;
  width: 2.41%;
  top: 29.24%;
  right: 62.67%;
  bottom: 69.31%;
  left: 34.92%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupChild3 = styled.div`
  position: absolute;
  height: 0.34%;
  width: 0.69%;
  top: 24.41%;
  right: 55.86%;
  bottom: 75.25%;
  left: 43.44%;
  border-radius: 50%;
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const GroupChild4 = styled.div`
  position: absolute;
  height: 0.34%;
  width: 0.69%;
  top: 34.54%;
  right: 60.91%;
  bottom: 65.11%;
  left: 38.39%;
  border-radius: 50%;
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const GroupChild5 = styled.div`
  position: absolute;
  height: 0.34%;
  width: 0.69%;
  top: 38.9%;
  right: 55.69%;
  bottom: 60.76%;
  left: 43.62%;
  border-radius: 50%;
  background-color: var(--white);
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const GroupChild6 = styled.div`
  position: absolute;
  height: 0.19%;
  width: 0.39%;
  top: 37.82%;
  right: 42.74%;
  bottom: 61.99%;
  left: 56.87%;
  border-radius: 50%;
  background-color: var(--white);
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const GroupChild7 = styled.div`
  position: absolute;
  height: 0.55%;
  width: 1.12%;
  top: 25.78%;
  right: 41.51%;
  bottom: 73.67%;
  left: 57.37%;
  border-radius: 50%;
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const GroupChild8 = styled.div`
  position: absolute;
  height: 3.09%;
  width: 1.01%;
  top: 58.99%;
  right: 98.99%;
  bottom: 37.92%;
  left: 0%;
  border-radius: 50%;
  filter: blur(4.47px);
  opacity: 0.4;
`;
const GroupChild9 = styled.div`
  position: absolute;
  height: 4.28%;
  width: 1.01%;
  top: 23.12%;
  right: -1.01%;
  bottom: 72.6%;
  left: 100%;
  border-radius: 50%;
  background-color: var(--white);
  filter: blur(4.47px);
  transform: rotate(180deg);
  transform-origin: 0 0;
  opacity: 0.5;
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
  padding: var(--padding-101xl) 0px 240px;
  gap: var(--gap-101xl);
  font-size: var(--font-size-14xl-5);
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
const FrameIcon1 = styled.img`
  position: absolute;
  height: 54.57%;
  width: 77.12%;
  top: 0%;
  right: 22.88%;
  bottom: 45.43%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.1;
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
const FrameIcon2 = styled.img`
  position: absolute;
  height: 54.57%;
  width: 77.12%;
  top: 0%;
  right: 22.88%;
  bottom: 45.43%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.02;
  mix-blend-mode: multiply;
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
const TextureIcon = styled.img`
  position: absolute;
  height: 125.11%;
  width: 114.79%;
  top: 0%;
  right: -14.79%;
  bottom: -25.11%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  mix-blend-mode: overlay;
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
const TradeNow = styled.b`
  position: relative;
  text-transform: uppercase;
`;
const ExploreTheMarketsLikeItIsParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: center;
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 368.3px;
  left: 3.91px;
  width: 1131px;
  height: 303px;
  object-fit: cover;
`;
const ChartIcon = styled.img`
  position: absolute;
  top: 20.3px;
  left: 122.91px;
  width: 892.37px;
  height: 445.79px;
`;
const GroupChild11 = styled.img`
  position: absolute;
  top: 170.3px;
  left: 137.91px;
  width: 802px;
  height: 430px;
  opacity: 0.3;
  mix-blend-mode: difference;
`;
const GroupChild12 = styled.img`
  position: absolute;
  top: 118.3px;
  left: 104.91px;
  width: 868px;
  height: 482px;
  opacity: 0.05;
  mix-blend-mode: difference;
`;
const FrameChild1 = styled.img`
  position: relative;
  width: 32px;
  height: 32px;
`;
const Bitcoin = styled.div`
  position: relative;
  letter-spacing: 0.2px;
  line-height: 20px;
  font-weight: 500;
`;
const Btcusdt = styled.div`
  position: relative;
  font-size: var(--mobile-caption-1-medium-size);
  letter-spacing: 0.2px;
  line-height: 17px;
  font-weight: 500;
  color: var(--neutrals-grey-41);
`;
const BitcoinParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-11xs);
`;
const GroupParent3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const VectorIcon5 = styled.img`
  position: relative;
  width: 74.25px;
  height: 28.25px;
`;
const FrameParent7 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Price = styled.div`
  position: relative;
  letter-spacing: 0.2px;
  line-height: 15px;
  font-weight: 500;
`;
const A = styled.a`
  position: relative;
  font-size: var(--mobile-title-3-medium-size);
  letter-spacing: 0.2px;
  line-height: 28px;
  font-weight: 500;
  color: var(--neutrals-grey-91);
  text-decoration: none;
`;
const PriceParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const M = styled.div`
  position: relative;
  font-size: var(--mobile-caption-1-medium-size);
  letter-spacing: 0.2px;
  line-height: 17px;
  font-weight: 500;
  color: var(--neutrals-grey-91);
`;
const VolParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Div = styled.div`
  position: relative;
  font-size: var(--mobile-caption-1-medium-size);
  letter-spacing: 0.2px;
  line-height: 17px;
  font-weight: 500;
  color: var(--sematics-green);
`;
const FrameParent9 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameParent8 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  font-size: var(--mobile-caption-3-size);
  color: var(--neutrals-grey-41);
`;
const FrameParent6 = styled.div`
  border-radius: var(--br-5xs);
  background-color: var(--neutrals-grey-2);
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-base) var(--padding-5xs);
  box-sizing: border-box;
  gap: var(--gap-lgi);
`;
const VectorIcon6 = styled.img`
  position: relative;
  width: 74.25px;
  height: 33.94px;
`;
const Div1 = styled.div`
  position: relative;
  font-size: var(--mobile-title-3-medium-size);
  letter-spacing: 0.2px;
  line-height: 28px;
  font-weight: 500;
  color: var(--neutrals-grey-91);
`;
const FrameParent5 = styled.div`
  position: absolute;
  top: 224.24px;
  left: 137.95px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const TextureIcon1 = styled.img`
  position: absolute;
  height: 97.12%;
  top: 0%;
  bottom: 2.88%;
  left: calc(50% - 567.45px);
  max-height: 100%;
  width: 1087px;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const RectangleParent = styled.div`
  position: relative;
  width: 1134.91px;
  height: 671.3px;
  font-size: var(--mobile-subheading-medium-size);
  color: var(--neutrals-grey-91);
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
const FrameParent4 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-121xl) 0px;
  gap: var(--gap-45xl);
  text-align: left;
`;
const Career = styled.div`
  position: relative;
`;
const Career1 = styled.b`
  position: relative;
  font-family: "Neurial Grotesk-Bold", Helvetica;
`;
const Span = styled.span`
  color: #d4f938;
`;
const NewFrontiers = styled.span`
  color: var(--white);
`;
const UnlockNewFrontiersContainer = styled.b`
  position: relative;
  letter-spacing: -2.1px;
  line-height: 76.88px;
  display: inline-block;
  width: 846px;
`;
const AreYouA = styled.div`
  position: relative;
  font-size: 22.37px;
  line-height: 32.85px;
  color: var(--neutrals-grey-4);
  display: inline-block;
  width: 659.09px;
`;
const UnlockNewFrontiersParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xl);
`;
const SameStrategiesWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FrameChild4 = styled.img`
  position: relative;
  width: 1px;
  height: 88px;
`;
const FrameParent19 = styled.div`
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
  color: var(--white);
`;
const GroupChild13 = styled.img`
  position: absolute;
  top: 7.88px;
  left: 0px;
  width: 684.5px;
  height: 413.5px;
`;
const FrameChild7 = styled.img`
  position: relative;
  width: 19px;
  height: 19px;
`;
const GroupParent7 = styled.div`
  position: absolute;
  top: 207px;
  left: 101px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const GroupParent8 = styled.div`
  position: absolute;
  top: 32px;
  left: 264px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const FrameChild9 = styled.img`
  position: relative;
  width: 19px;
  height: 18.5px;
`;
const GroupParent9 = styled.div`
  position: absolute;
  top: 0px;
  left: 506px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const GroupParent10 = styled.div`
  position: absolute;
  top: 384px;
  left: 152px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  color: var(--color-mediumspringgreen-100);
`;
const GroupParent11 = styled.div`
  position: absolute;
  top: 194px;
  left: 425px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  color: var(--color-mediumspringgreen-100);
`;
const VectorContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 684.5px;
  height: 421.5px;
`;
const Btcusdt1 = styled.div`
  position: absolute;
  top: 24px;
  left: 28px;
  font-size: var(--font-size-5xl);
  color: var(--white);
`;
const GroupParent6 = styled.div`
  flex: 1;
  position: relative;
  height: 420px;
  overflow: hidden;
`;
const FrameChild12 = styled.img`
  align-self: stretch;
  position: relative;
  max-height: 100%;
  width: 1px;
`;
const GroupChild14 = styled.img`
  position: absolute;
  top: 5.13px;
  right: -262.5px;
  width: 662.5px;
  height: 305.98px;
`;
const GroupParent13 = styled.div`
  position: absolute;
  top: 65px;
  right: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const FrameChild14 = styled.img`
  position: relative;
  width: 18px;
  height: 18px;
`;
const GroupParent14 = styled.div`
  position: absolute;
  top: 104px;
  right: 529px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  color: var(--color-tomato);
`;
const GroupParent15 = styled.div`
  position: absolute;
  top: 0px;
  right: 85px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  color: var(--color-tomato);
`;
const GroupParent16 = styled.div`
  position: absolute;
  top: 282px;
  right: 621px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const GroupParent17 = styled.div`
  position: absolute;
  top: 291px;
  right: 297px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const VectorParent1 = styled.div`
  position: absolute;
  top: 64px;
  right: 0px;
  width: 687px;
  height: 311px;
`;
const Nifty = styled.div`
  position: absolute;
  top: 355px;
  left: 302px;
  font-size: var(--font-size-5xl);
  text-transform: uppercase;
  color: var(--white);
  text-align: right;
`;
const GroupParent12 = styled.div`
  position: relative;
  width: 400px;
  height: 420px;
  overflow: hidden;
  flex-shrink: 0;
  color: var(--color-mediumspringgreen-100);
`;
const FrameParent21 = styled.div`
  position: absolute;
  top: 34.01px;
  left: 54px;
  width: 966px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const TextureIcon2 = styled.img`
  position: absolute;
  height: 100%;
  top: 0%;
  bottom: 0%;
  left: calc(50% - 565px);
  max-height: 100%;
  width: 1130px;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const FrameParent20 = styled.div`
  position: relative;
  width: 1130px;
  height: 510px;
  text-align: left;
  font-size: var(--mobile-subheading-medium-size);
  color: var(--color-tomato);
`;
const FrameParent18 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-131xl) 0px;
  gap: var(--gap-45xl);
  color: var(--electric-green-primary);
`;
const DeposityAMinimum = styled.div`
  position: relative;
  font-size: 22.37px;
  line-height: 32.85px;
  color: var(--neutrals-grey-8);
  display: inline-block;
  width: 659.09px;
`;
const StartSmallEarnBigParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Icon = styled.img`
  position: absolute;
  top: 52px;
  left: 43px;
  width: 190.85px;
  height: 119.22px;
`;
const DepositBonus = styled.b`
  position: relative;
  letter-spacing: -1.69px;
  line-height: 50.63px;
  display: inline-block;
  width: 175.5px;
`;
const OurAssetsLiquidity = styled.div`
  align-self: stretch;
  position: relative;
  font-size: 15.75px;
  line-height: 23.63px;
  color: var(--neutrals-grey-61);
`;
const DepositBonusParent = styled.div`
  position: absolute;
  top: 232px;
  left: 29px;
  width: 424px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16.88px;
`;
const TextureIcon3 = styled.img`
  position: absolute;
  height: 144.89%;
  top: 0%;
  bottom: -44.89%;
  left: calc(50% - 276.5px);
  max-height: 100%;
  width: 751px;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const FrameIcon5 = styled.img`
  position: absolute;
  top: 0.52px;
  right: 0px;
  width: 304.19px;
  height: 272.95px;
  overflow: hidden;
  opacity: 0.55;
  mix-blend-mode: soft-light;
`;
const AsSomeoneWhosAlwaysLookinParent = styled.div`
  flex: 1;
  position: relative;
  background-color: var(--color-whitesmoke);
  height: 450px;
  overflow: hidden;
`;
const DedicatedRelationshipManagerContainer = styled.b`
  align-self: stretch;
  position: relative;
  letter-spacing: -1.69px;
  line-height: 50.63px;
`;
const DedicatedRelationshipManagerParent = styled.div`
  position: absolute;
  top: 232px;
  left: 29px;
  width: 446px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16.88px;
`;
const Manager1Icon = styled.img`
  position: absolute;
  top: 54px;
  left: 48.75px;
  width: 158.24px;
  height: 104.8px;
`;
const TextureIcon4 = styled.img`
  position: absolute;
  height: 154.22%;
  top: 0%;
  bottom: -54.22%;
  left: calc(50% - 276.5px);
  max-height: 100%;
  width: 668px;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const FrameParent23 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-21xl);
`;
const FrameParent22 = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-98xl) var(--padding-141xl);
  gap: 91px;
  color: var(--white1);
`;
const DerivatesMadeSimpleContainer = styled.b`
  position: relative;
  letter-spacing: -0.02em;
  line-height: 80px;
  display: inline-block;
  width: 936px;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
const FrameChild18 = styled.img`
  position: relative;
  width: 646.03px;
  height: 646.03px;
`;
const FrameChild19 = styled.img`
  position: relative;
  width: 119.56px;
  height: 120px;
`;
const CreateAnAccount = styled.div`
  position: relative;
  font-weight: 500;
`;
const RegisterComplete = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 32px;
  color: var(--color-darkgray-100);
  display: inline-block;
  width: 384px;
`;
const CreateAnAccountParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-base);
`;
const TradeNowContainer = styled.div`
  border-radius: var(--br-5xs);
  background: linear-gradient(85.85deg, #d4f938 29.17%, #32d875);
  box-shadow: 0px 0px 16px rgba(168, 239, 156, 0.8);
  backdrop-filter: blur(10px);
  width: 216px;
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
const FrameParent26 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-17xl);
`;
const GroupParent19 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const GroupParent18 = styled.div`
  width: 1442px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const FrameChild20 = styled.img`
  position: relative;
  width: 1134px;
  height: 1px;
  opacity: 0.4;
`;
const FrameChild22 = styled.img`
  position: relative;
  width: 107.11px;
  height: 100px;
`;
const GroupParent20 = styled.div`
  width: 1446px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const FrameChild25 = styled.img`
  position: relative;
  width: 115.81px;
  height: 120px;
`;
const FrameParent25 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-21xl);
  text-align: left;
  font-size: var(--font-size-21xl);
`;
const DerivatesMadeSimpleIn3EasParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-101xl) 0px;
  gap: var(--gap-101xl);
`;
const BackedByTheBestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image109Icon = styled.img`
  position: relative;
  width: 184.62px;
  height: 40px;
  object-fit: cover;
`;
const Image110Icon = styled.img`
  position: relative;
  width: 124.24px;
  height: 100px;
  object-fit: cover;
`;
const Image111Icon = styled.img`
  position: relative;
  width: 108.22px;
  height: 64px;
  object-fit: cover;
`;
const Image112Icon = styled.img`
  position: relative;
  width: 182.02px;
  height: 64px;
  object-fit: cover;
`;
const Image113Icon = styled.img`
  position: relative;
  width: 120px;
  height: 120.92px;
  object-fit: cover;
`;
const Image114Icon = styled.img`
  position: relative;
  width: 236px;
  height: 24px;
  object-fit: cover;
`;
const Image115Icon = styled.img`
  position: relative;
  width: 219.7px;
  height: 40px;
  object-fit: cover;
`;
const Image109Parent = styled.div`
  width: 954px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--gap-61xl);
`;
const UtsavsomaniBackgroundRemoved = styled.img`
  position: relative;
  width: 120px;
  height: 138px;
  object-fit: cover;
`;
const AdityaNagarsheth = styled.p`
  margin-block-start: 0;
  margin-block-end: 0.72px;
`;
const UtsavsomaniBackgroundRemovedParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
  text-align: left;
`;
const AdityaNagarsheth1 = styled.b``;
const PerpetualValuePartners = styled.p`
  margin: 0;
  font-size: var(--font-size-smi-8);
  line-height: 160%;
  font-weight: 500;
  color: var(--color-slategray);
`;
const PicABackgroundRemoved1Parent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const ImageBackgroundRemoved1 = styled.img`
  position: relative;
  width: 120px;
  height: 138.57px;
  object-fit: cover;
`;
const FrameParent31 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--gap-21xl);
`;
const FrameParent30 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-197xl);
  gap: var(--gap-61xl);
  font-size: 20.48px;
`;
const AsSomeoneWhos = styled.div`
  position: absolute;
  top: 40px;
  left: 29px;
  line-height: 28px;
  display: inline-block;
  width: 303px;
`;
const PrakashJamatia = styled.b`
  position: absolute;
  top: 278px;
  left: 29px;
  font-size: var(--font-size-9xl);
  letter-spacing: -1px;
  line-height: 0%;
  color: var(--white1);
`;
const FounderTradeshala = styled.div`
  position: absolute;
  top: 346px;
  left: 29px;
  font-size: var(--font-size-base);
  font-weight: 500;
`;
const TextureIcon5 = styled.img`
  position: absolute;
  height: 144.89%;
  top: 0%;
  bottom: -44.89%;
  left: calc(50% - 181px);
  max-height: 100%;
  width: 751px;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const FrameIcon7 = styled.img`
  position: absolute;
  height: 60.66%;
  top: 0.12%;
  right: 0px;
  bottom: 39.23%;
  max-height: 100%;
  width: 304.19px;
  overflow: hidden;
  opacity: 0.55;
  mix-blend-mode: soft-light;
`;
const Unsplashieebwgy6laIcon = styled.img`
  position: absolute;
  top: 277px;
  left: 203px;
  width: 186px;
  height: 187px;
  object-fit: cover;
`;
const FrameChild26 = styled.img`
  position: absolute;
  height: 23.07%;
  width: 30.03%;
  top: 6%;
  right: 7.19%;
  bottom: 70.93%;
  left: 62.78%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  opacity: 0.04;
`;
const Unsplasho5nbw8gtnmcIcon = styled.img`
  position: absolute;
  top: 235px;
  left: 169px;
  width: 216px;
  height: 248px;
  object-fit: cover;
`;
const Unsplashzhvm3xiohoeIcon = styled.img`
  position: absolute;
  top: 228px;
  right: -40px;
  width: 239px;
  height: 239px;
  object-fit: cover;
`;
const FrameParent33 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--neutrals-grey-61);
`;
const FrameParent32 = styled.div`
  align-self: stretch;
  background-color: var(--white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-98xl) var(--padding-141xl);
  gap: var(--gap-45xl);
  color: var(--white1);
`;
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
const FrameWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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
  background-image: url("/frame-1000005536@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: left;
`;
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
  top: 39.16px;
  left: 30px;
  letter-spacing: -1px;
  line-height: 40px;
  display: inline-block;
  width: 239px;
`;
const CeoDensity = styled.div`
  position: absolute;
  top: 123.16px;
  left: 30px;
  font-size: var(--font-size-xl);
  letter-spacing: -1px;
  line-height: 40px;
  color: var(--neutrals-grey-6);
`;
const Image95Icon = styled.img`
  position: absolute;
  top: 93.16px;
  left: 61px;
  width: 363px;
  height: 327px;
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
  left: 108px;
  width: 315px;
  height: 315px;
  object-fit: cover;
`;
const Image96Icon = styled.img`
  position: absolute;
  top: 117.16px;
  left: 91px;
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
  width: 189.51px;
  height: 32.03px;
`;
const Footer = styled.div`
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
