import { styled } from "frontity";
import { BtnPrimary } from "../buttons/button-primary";
import { ButtonWrap } from "../buttons/button-wrap";
import { device } from "../queries";
import { MainTag } from "../typography/main-tag";
import { Body3, HeroTitle } from "../typography/text";
import item from '../images/Item 1.svg'
import item2 from '../images/Item 2.svg'
import item3 from '../images/Item 3.svg'
import item4 from '../images/Item 5.svg'
import hlHero from '../images/Highlight_06.svg'
import heroImg from "../images/hero-img.png";
import highlight from '../images/Highlight_10.svg'



const HeroHome = () => {
    return (
        <Hero>
            <HeroLeft>
              <MainTag>World of Warcraft</MainTag>
              <HeroTitleHome>
                <Dot>WOW boosting</Dot> <br />
                solution from any to every division
              </HeroTitleHome>
              <Body3>
                League boosting solution from any to every division. LoL
                boosting is a very popular gaming service and a modern standard
                for anyone who has respect for their time.
              </Body3>

              <ButtonWrap link='/about/'>
                <BtnPrimary>About Us</BtnPrimary>
              </ButtonWrap>
            </HeroLeft>
            <HeroRight>
              <img src={heroImg} alt="hero" />
              <img src={item} className='decor leftBtm' alt="decor" />
              <img src={item2} className='decor rightBtm' alt="decor" />
              <img src={hlHero} className='decor rightBtw' alt="decor" />
              <img src={item3} className='decor right' alt="decor" />
              <img src={item4} className='decor leftTop' alt="decor" />
            </HeroRight>
          </Hero>
    )
}

export default HeroHome

const Hero = styled.div`
  padding: 15% 0;
  display: flex;
  flex-direction: column-reverse;
  position: relative;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const HeroTitleHome = styled(HeroTitle)`
  position: relative;

  &::after {
    content: url(${highlight});
    position: absolute;
    inset: 30% -10% auto auto;
  }
`

const HeroLeft = styled.div`
  width: 100%;

  @media ${device.laptop} {
    width: 50%;
  }
`;

const HeroRight = styled.div`
  width: 100%;
  position: relative;
  inset: 0 0 auto auto;
  display: flex;
  align-items: center;
  justify-content: center;

  & .decor {
    position: absolute;
    max-width: 20%;

    @media ${device.tablet} {
      max-width: 100%;
    }

    &.leftBtm {
      inset: auto auto 0 0;
    }

    &.rightBtm {
      inset: auto 50px 0 auto;
    }

    &.right {
      inset: auto 0 auto auto;
    }

    &.leftTop {
      inset: -50px auto auto 0;
    }

    &.rightBtw {
      z-index: -1;
      inset: auto 0 50px auto;
    }
  }

  @media ${device.laptop} {
    inset: 0;
  }
`;

const Dot = styled.span`
  border: 1px dashed #5479e5;
  /* background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='black' stroke-width='4' stroke-dasharray='20' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"); */
  border-radius: 8px;
  background: linear-gradient(89.67deg, #5479e6 0.26%, #7094ea 99.71%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
`;