import { connect, styled } from "frontity";
import React from "react";
import WorkHome from "../home/work";
import { MainTag } from "../typography/main-tag";
import { Body2, Body3, Heading2, Heading3, Heading4 } from "../typography/text";
import bgGradient from "../images/review-bg.png";
import { device } from "../queries";
import Fox from "../images/about-us/Fox-hat.png";
import Privacy from "../images/about-us/confidential-password.svg";
import Best from "../images/about-us/guarantee.svg";
import Chat from "../images/about-us/chat-talking.svg";
import Smart from "../images/about-us/smart-icon.svg";
import Power from "../images/about-us/power-icon.svg";
import Coaching from "../images/about-us/coaching-icon.svg";
import LonelyImg from "../images/about-us/join-img.png";
import { BtnPrimary } from "../buttons/button-primary";
import { BtnSecondary } from "../buttons/button-secondary";
import { Wrap } from "../contianer/wrap";
import { Info } from "./info";
import { DecorTitle2 } from "../typography/decor-title";
import { Dot } from "../typography/dot";

const About = () => {

  return (
    <>
      <AboutHero>
        <Wrap>
          <Center>
            <MainTag>About Us</MainTag>
            <Heading2>Welcome to <Dot>Lol Boosting</Dot></Heading2>
            <Body3>
              Eloboostleague is the world’s most advanced League of Legends boosting service. Since Season 1, we’ve become one of the leading platforms for League of Legends boosting.
            </Body3>
          </Center>
        </Wrap>

        <CountBox>
          <div>
            <Heading2>13.121</Heading2>
            <Body2>Constant Player</Body2>
          </div>
          <div>
            <Heading2>13.121</Heading2>
            <Body2>Constant Player</Body2>
          </div>
          <div>
            <Heading2>13.121</Heading2>
            <Body2>Constant Player</Body2>
          </div>
        </CountBox>
      </AboutHero>

      <div className="container">
        <section className="section">
          <Center>
            <MainTag>Some addings for you</MainTag>
            <Heading2>Our Values</Heading2>
            <Body3>Our wservices are guided by three simple principles:</Body3>

            <ValuesCards>
              <VCard>
                <VIcon src={Privacy} alt="icon" />
                <Heading3>Absolute Privacy</Heading3>
                <Body3>
                  At Eloboostleague, we always keep our customers privacy as our
                  number one priority. We do our best to ask and save even
                  temporarily as little information as possible. We’re grateful
                  for having you as our customer and will do our best to always
                  keep your satisfaction and privacy in mind on our every step.
                </Body3>
              </VCard>
              <VCard>
                <VIcon src={Best} alt="icon" />
                <Heading3>Absolute Privacy</Heading3>
                <Body3>
                  At Eloboostleague, we always keep our customers privacy as our
                  number one priority. We do our best to ask and save even
                  temporarily as little information as possible. We’re grateful
                  for having you as our customer and will do our best to always
                  keep your satisfaction and privacy in mind on our every step.
                </Body3>
              </VCard>
              <VCard>
                <VIcon src={Chat} alt="icon" />
                <Heading3>Absolute Privacy</Heading3>
                <Body3>
                  At Eloboostleague, we always keep our customers privacy as our
                  number one priority. We do our best to ask and save even
                  temporarily as little information as possible. We’re grateful
                  for having you as our customer and will do our best to always
                  keep your satisfaction and privacy in mind on our every step.
                </Body3>
              </VCard>
            </ValuesCards>
          </Center>
        </section>

        <section className="section">
          <Center>
            <Wrap>
                <MainTag>Rank solutions</MainTag>
                <Heading2>Our Service</Heading2>
                <Body3>
                  Eloboostleague is changing how gamers experience their games and
                  Smart Solution. We all want to see our characters and skill grow
                  but growth does not happen without action. Eloboostleague provides
                  you the potential for action and growth by servicing you with
                  world class boosting, duo queueing and coaching solution.
                </Body3>

            </Wrap>

            <ServiceInfo>
              <ContentWrap>
                
                <Info img={Smart} />
                <Info img={Smart} />
                <Info img={Smart} />

              </ContentWrap>

              <ContentWrap>
                <img src={Fox} alt="fox" />
              </ContentWrap>
            </ServiceInfo>
          </Center>
        </section>
      </div>

      <Team>
        <div className="container">
          <Wrap>
            <MainTag>Join us</MainTag>
            <Heading2>Our Team</Heading2>
            <Body3>
              LoL Duo Boosting is a gaming service in LoL which allows players who
              take advantage of this service to rank up their accounts in the ranked
              ladder
            </Body3>
          </Wrap>

          <CountTeam>
            <div>
              <Heading2>24/7</Heading2>
              <Body3>Ready to help you <br />solve your problems</Body3>
            </div>
            <div>
              <Heading2>24/7</Heading2>
              <Body3>Ready to help you <br />solve your problems</Body3>
            </div>
            <div>
              <Heading2>24/7</Heading2>
              <Body3>Ready to help you <br />solve your problems</Body3>
            </div>
            <div>
              <Heading2>24/7</Heading2>
              <Body3>Ready to help you <br />solve your problems</Body3>
            </div>
          </CountTeam>

          <Lonely>
            <img src={LonelyImg} alt='image' />
            <LonelyRight>
              <MainTag>It's lonely to play alone</MainTag>
              <Heading3>Let’s start a journey together</Heading3>
              <Body3>We’ll team up with you on both solo and duo orders to conquer the game together as a team.</Body3>

              <ButtonsWrap>
                <BtnPrimary>Play Together</BtnPrimary>
                <BtnSecondary>Rank up your account</BtnSecondary>
              </ButtonsWrap>
            </LonelyRight>
          </Lonely>
        </div>
      </Team>

      <WorkHome />
    </>
  );
};

export default connect(About);

const AboutHero = styled.div`
  margin-top: 80px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    background: var(--card);
    position: absolute;
    inset: 0;
    z-index: -2;
  }

  &::after {
    content: "";
    background: url(${bgGradient}) center no-repeat;
    background-size: cover;
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;

const CountBox = styled.div`
  background: #4b76e2;
  backdrop-filter: blur(12px);
  border-radius: 30px;
  width: max-content;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  color: #fff;
  row-gap: 10px;
  padding: 20px 50px;
  margin-top: 60px;

  @media ${device.laptop} {
    /* width: 70%; */
    flex-direction: row;

    & > div {
      padding: 0 100px !important;

      &:nth-child(2) {
        border-top: none !important;
        border-bottom: none !important;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
      }
    }
  }

  & > div {
    padding: 10px 50px;
    text-align: center;
    display: inline-block;
    color: #fff;

    & p {
      color: #fff;
    }

    &:nth-child(2) {
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
    }
  }
`;

const ValuesCards = styled.div`
  display: grid;
  margin-top: 60px;
  grid-template-columns: 1fr;
  gap: 30px;
  
  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const VCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  padding: 40px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url(${bgGradient}) center no-repeat;
    background-size: cover;
    border-radius: 30px;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--card);
    border-radius: 30px;
    z-index: -2;
  }
`;

const VIcon = styled.img`
  margin-bottom: 20px;
`;

const ServiceInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
  position: relative;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }

  &::before {
    content: '';
    border-left: 1px dashed #D0D5DF;
    display: block;
    position: absolute;
    inset: 0;
    margin-left: 40px;
    z-index: -1;
    height: 50%;
    
    @media ${device.laptop} {
      height: 60%;
      margin: auto 0 auto 40px;
    }

  }
`;

const ContentWrap = styled.div`
  width: 100%;

  @media ${device.laptop} {
    width: 50%;
  }
`;


const Center = styled.div`
  text-align: center;
`;

const Team = styled.div`
  margin-top: 100px;
  padding: 5% 0;
  text-align: center;
  position: relative;

  &::before {
    content: "";
    background: var(--card);
    position: absolute;
    inset: 0;
    z-index: -2;
  }

  &::after {
    content: "";
    background: url(${bgGradient}) center no-repeat;
    background-size: cover;
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;

const CountTeam = styled.div`
  margin-top: 60px;
  display: flex;
  row-gap: 40px;
  flex-direction: column;
  
  @media ${device.laptop} {
      width: max-content;
      flex-direction: row;
    }


  & > div {
    padding: 0 90px;
    text-align: center;

    @media ${device.laptop} {
      &:nth-child(2) {
        border-left: 1px solid rgba(77, 137, 255, .4);
      }
  
      &:nth-child(3) {
        border-left: 1px solid rgba(77, 137, 255, .4);
        border-right: 1px solid rgba(77, 137, 255, .4);
      }
    }
  }
`;

const Lonely = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  gap: 100px;
  flex-direction: column;

    @media ${device.laptop} {
      flex-direction: row;
    }

`

const LonelyRight = styled.div`
  text-align: left;
`

const ButtonsWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`