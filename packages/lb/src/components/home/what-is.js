import { styled } from "frontity";
import { MainTag } from "../typography/main-tag";
import { Body3, Heading2, Heading4 } from "../typography/text";
import icon from "../images/Card 22.svg";
import whatIsBg from "../images/what-is-img.png";
import highlight2 from '../images/what-is/Highlight_05.svg'
import burstwi from '../images/what-is/Burst-pucker-2-1.svg'
import { device } from "../queries";


const WhatIs = () => {
    return (
        <section className="section">
            <div style={{ textAlign: "center" }}>
              <MainTag>What Is Elo Boosting League?</MainTag>
              <WhatIsTitle>
                We offer to buy booster <br /> for your account
              </WhatIsTitle>
              <Body3>
                LoL Duo Boosting is a gaming service in LoL which allows players
                who take advantage <br />
                of this service to rank up their accounts in the ranked ladder
              </Body3>
            </div>

            <WhatIsContent>
              <WILeft>
                <InfoWrap>
                  <img src={icon} alt="icon" />
                  <div>
                    <Heading4>Solve problems in the ranked ladder</Heading4>
                    <Body3>
                      We’ll fix your rank for you without you wasting your time
                      grinding for it. Nobody wants to grind the rank back all
                      week just to save a few bucks.
                    </Body3>
                  </div>
                </InfoWrap>
                <InfoWrap>
                  <img src={icon} alt="icon" />
                  <div>
                    <Heading4>Solve problems in the ranked ladder</Heading4>
                    <Body3>
                      We’ll fix your rank for you without you wasting your time
                      grinding for it. Nobody wants to grind the rank back all
                      week just to save a few bucks.
                    </Body3>
                  </div>
                </InfoWrap>
                <InfoWrap>
                  <img src={icon} alt="icon" />
                  <div>
                    <Heading4>Solve problems in the ranked ladder</Heading4>
                    <Body3>
                      We’ll fix your rank for you without you wasting your time
                      grinding for it. Nobody wants to grind the rank back all
                      week just to save a few bucks.
                    </Body3>
                  </div>
                </InfoWrap>
              </WILeft>

              <WhatIsImg src={whatIsBg} alt="what-is" />
            </WhatIsContent>
          </section>
    )
}

export default WhatIs

const InfoWrap = styled.div`
  display: flex;
  column-gap: 30px;
  margin-bottom: 50px;
`;

const IconBox = styled.img`
  /* width: 70px;
    height: 70px; */
`;

const WhatIsTitle = styled(Heading2)`
  position: relative;

  &::before {
    content: url(${highlight2});
    position: absolute;
    inset: -20px auto auto 20%;
  }
  
  &::after {
    content: url(${burstwi});
    position: absolute;
    inset: 0 15% auto auto;
  }
`

const WhatIsImg = styled.img``;

const WhatIsContent = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */

  @media ${device.laptop} {
    flex-direction: row;
  }
`

const WILeft = styled.div`
  width: 100%;

  @media ${device.laptop} {
    width: 50%;
  }
`