import { styled } from "frontity";
import React from 'react'
import { device } from "../queries";
import { Body3, Heading3 } from "../typography/text";

export const Info = ({img}) => {

    const [infoOpen, setInfoOpen] = React.useState(true)

  return (
    <InfoWrap>
      <img src={img} alt="icon" />
      <div>
        <Heading3 onClick={() => setInfoOpen(!infoOpen)}>
          Smart Solution
        </Heading3>
        {infoOpen && (
          <Body3>
            Had a bad day? Games ruined by smurfs? A little bit too tipsy last
            night in your ranked game? No problem! We’ll fix it for you without
            you wasting your time grinding for it. Nobody wants to grind the
            rank back all week just to save a few bucks.
          </Body3>
        )}
      </div>
    </InfoWrap>
  );
};


const InfoWrap = styled.div`
  display: flex;
  column-gap: 30px;
  margin-bottom: 50px;
  text-align: left;
  align-items: flex-start;
  /* align-items: ${infoOpen ? 'flex-start' : 'center'}; */

  & > div {
    width: 100%;

    @media ${device.laptop} {
      width: 70%;
    }
  }
`;
