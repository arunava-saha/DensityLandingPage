import React from "react";
import styled from "styled-components";
import { F71, F72, F73, F7p1, F7p2, F7p3 } from "../../images";

const DerivatesMadeSimpleContainer = styled.b`
  position: relative;
  letter-spacing: -0.02em;
  line-height: 80px;
  display: inline-block;
  width: 936px;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
const FrameChild18 = styled.div`
  position: relative;
  width: 600px;
  height: 646px;
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
const FrameChild20 = styled.hr`
  position: relative;
  background: #fff;
  width: 1134px;
  height: 1.3px;
  opacity: 0.1;
`;
const FrameChild22 = styled.img`
  position: relative;
  width: 107.11px;
  height: 100px;
`;
const ItsTimeTo = styled.p`
  margin: 0;
`;
const The = styled.span``;
const NewFrontiers = styled.span`
  color: var(--white);
`;
const TradeNow = styled.b`
  position: relative;
  text-transform: uppercase;
`;
const PayLess = styled.span`
  color: var(--electric-green-primary);
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

export const F7 = () => {
  return (
    <>
      <DerivatesMadeSimpleIn3EasParent>
        <DerivatesMadeSimpleContainer>
          <ItsTimeTo>Derivates made simple</ItsTimeTo>
          <ItsTimeTo>
            <The>{`in `}</The>
            <PayLess>3 Easy</PayLess>
            <NewFrontiers> Steps</NewFrontiers>
          </ItsTimeTo>
        </DerivatesMadeSimpleContainer>
        <FrameParent25>
          <GroupParent18>
            <FrameChild18>
              <img src={F7p1} alt="" />
            </FrameChild18>
            <GroupParent19>
              <FrameChild19 alt="" src={F71} />
              <FrameParent26>
                <CreateAnAccountParent>
                  <CreateAnAccount>Create an Account</CreateAnAccount>
                  <RegisterComplete>{`Register & Complete your Verification in less than 2 minutes`}</RegisterComplete>
                </CreateAnAccountParent>
                <TradeNowContainer>
                  <TradeNow>Trade Now</TradeNow>
                </TradeNowContainer>
              </FrameParent26>
            </GroupParent19>
          </GroupParent18>
          <FrameChild20 />
          <GroupParent20>
            <FrameChild18>
              <img src={F7p2} alt="" />
            </FrameChild18>
            <GroupParent19>
              <FrameChild22 alt="" src={F72} />
              <FrameParent26>
                <CreateAnAccountParent>
                  <CreateAnAccount>Deposit Funds</CreateAnAccount>
                  <RegisterComplete>
                    Add funds quickly using a variety of payment methods
                  </RegisterComplete>
                </CreateAnAccountParent>
                <TradeNowContainer>
                  <TradeNow>Trade Now</TradeNow>
                </TradeNowContainer>
              </FrameParent26>
            </GroupParent19>
          </GroupParent20>
          <FrameChild20 />
          <GroupParent18>
            <FrameChild18>
              <img src={F7p3} alt="" />
            </FrameChild18>
            <GroupParent19>
              <FrameChild25 alt="" src={F73} />
              <FrameParent26>
                <CreateAnAccountParent>
                  <CreateAnAccount>Become a Trader</CreateAnAccount>
                  <RegisterComplete>{`Choose Your Trading Pair & Trade Seamlessly`}</RegisterComplete>
                </CreateAnAccountParent>
                <TradeNowContainer>
                  <TradeNow>Trade Now</TradeNow>
                </TradeNowContainer>
              </FrameParent26>
            </GroupParent19>
          </GroupParent18>
        </FrameParent25>
      </DerivatesMadeSimpleIn3EasParent>
    </>
  );
};
