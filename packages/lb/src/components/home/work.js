import { styled } from "frontity";
import { BtnPrimary } from "../buttons/button-primary";
import { ButtonWrap } from "../buttons/button-wrap";
import { device } from "../queries";
import { MainTag } from "../typography/main-tag";
import { BlueText, Body3, Heading2 } from "../typography/text";
import work from "../images/PngItem_work.png";
import bgGradient from "../images/review-bg.png";
import highlight from '../images/Highlight_10.svg'


const WorkHome = () => {
    return (
        <section className="section">
        <Work>
          <WorkLeft>
            <MainTag>Work With Us</MainTag>
            <WorkTitle>
              We Are <BlueText>Hiring</BlueText>
            </WorkTitle>
            <Body3>
              League boosting solution from any to every division. LoL boosting
              is a very popular gaming service and a modern standard for anyone
              who has respect for their time.
            </Body3>
          </WorkLeft>
            <ButtonWrap>
              <BtnPrimary>Find Job</BtnPrimary>
            </ButtonWrap>

          <WorkImg src={work} alt="work" />
        </Work>
      </section>
    )
}

export default WorkHome

const Work = styled.div`
  border-radius: 30px;
  /* width: 100%; */
  display: block;
  padding: 48px 0 0 48px;
  position: relative;
  margin-bottom: -10px;
  
  @media ${device.laptop} {
    padding: 58px;
    width: 70%;
    margin: 0 auto;
  }

  &::before {
    content: "";
    background: var(--card);
    position: absolute;
    inset: 0;
    z-index: -2;
    border-radius: 30px;
  }

  &::after {
    content: "";
    background: url(${bgGradient}) center no-repeat;
    background-size: cover;
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: 30px;
  }
`;

const WorkTitle = styled(Heading2)`
    position: relative;

    &::after {
      content: url(${highlight});
      /* margin-left: 10px; */
    }
`

const WorkImg = styled.img`
  height: 100%;
  border-radius: 30px;
  
  @media ${device.laptop} {
    position: absolute;
    inset: 0 0 0 auto;
  }
`;

const WorkLeft = styled.div`
  width: 100%;

  @media ${device.laptop} {
    width: 50%;
  }
`;