import React from "react";
import styled from "styled-components";
import { F6a0, F6a1 } from "../../images";

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
const ItsTimeTo = styled.p`
  margin: 0;
`;
const TradeMorePayContainer = styled.b`
  position: relative;
  letter-spacing: -2.1px;
  line-height: 76.88px;
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

export const F6 = () => {
  return (
    <>
      <FrameParent22>
        <StartSmallEarnBigParent>
          <TradeMorePayContainer>Start Small. Earn Big.</TradeMorePayContainer>
          <DeposityAMinimum>
            Deposity a minimum of 1000 and get a Deposit bonus + dedicagted
            relationship manager
          </DeposityAMinimum>
        </StartSmallEarnBigParent>
        <FrameParent23>
          <AsSomeoneWhosAlwaysLookinParent>
            <Icon alt="" src={F6a0} />
            <DepositBonusParent>
              <DepositBonus>
                <ItsTimeTo>Deposit</ItsTimeTo>
                <ItsTimeTo>Bonus.</ItsTimeTo>
              </DepositBonus>
              <OurAssetsLiquidity>
                Our assets' liquidity is unmatched in the market, with a small
                bid-ask spread and a well-balanced order book.
              </OurAssetsLiquidity>
            </DepositBonusParent>
          </AsSomeoneWhosAlwaysLookinParent>
          <AsSomeoneWhosAlwaysLookinParent>
            <DedicatedRelationshipManagerParent>
              <DedicatedRelationshipManagerContainer>
                <ItsTimeTo>Dedicated</ItsTimeTo>
                <ItsTimeTo>Relationship Manager.</ItsTimeTo>
              </DedicatedRelationshipManagerContainer>
              <OurAssetsLiquidity>
                Our assets' liquidity is unmatched in the market, with a small
                bid-ask spread and a well-balanced order book.
              </OurAssetsLiquidity>
            </DedicatedRelationshipManagerParent>
            <Manager1Icon alt="" src={F6a1} />
          </AsSomeoneWhosAlwaysLookinParent>
        </FrameParent23>
      </FrameParent22>
    </>
  );
};
