import { connect, styled } from "frontity";
import React from "react";
import { Divider } from "../other/divider";
import SidebarNav from "../sidebar-nav";
import { MainTag } from "../typography/main-tag";
import {
  Body2,
  Body3,
  Body4,
  Heading2,
  Heading3,
  Heading4,
  Heading6,
  Heading7,
} from "../typography/text";
import star from "../images/star-rating.png";
import ratingLogo from "../images/Trustpilot.png";
import { ButtonContainer } from "../buttons/button-container";
import { Center } from "../typography/center";
import { BtnPrimary } from "../buttons/button-primary";
import itemImg from "../images/order/item.png";
import { Input, Option, Select } from "../form/input";
import what from "../images/slider/what.svg";
import count from "../images/slider/card-count.png";
import check from "../images/icons/verified.svg";
import ratingStar from "../images/icons/star-rating.svg";
import bgBasket from "../images/slider/bg-basket.png";
import Breadcrumbs from "../breadcrumbs";
import { SmallContainer } from "../contianer/small-container";
import { device } from "../queries";

const ProductSlider = () => {
  return (
    <>
      <SidebarNav />

      <MainRight>
        <div className="container">
          <section className="section">
            <Breadcrumbs />
            <Heading2>We offer to buy booster for your account</Heading2>
            <Body3>
              Lol Boosting provides cheap WoW boosting of all types: character
              or PvP boosting, raid or dungeons carry, Powerleveling, farming &
              many more to save your time. Book a slot in our live chat and
              enjoy WoW boost!{" "}
            </Body3>

            <ContentSlide>
              <Positions>
                <Position>
                  <Heading4>Current Position</Heading4>
                  <img src={itemImg} alt="item" />
                  <Select name="position">
                    <Option value="iron">Iron</Option>
                    <Option value="platinum">Platinum</Option>
                  </Select>
                  <Select name="division">
                    <Option value="division 4">Division 4</Option>
                    <Option value="division 5">Division 5</Option>
                  </Select>
                  <Select name="LP">
                    <Option value="lp 20">LP 0-20</Option>
                    <Option value="lp 30">LP 0-30</Option>
                  </Select>
                </Position>
                <Position>
                  <Heading4>Desired Position</Heading4>
                  <img src={itemImg} alt="item" />
                  <Select name="position">
                    <Option value="platinum">Platinum</Option>
                    <Option value="iron">Iron</Option>
                  </Select>
                  <Select name="division">
                    <Option value="division 4">Division 4</Option>
                    <Option value="division 5">Division 5</Option>
                  </Select>
                </Position>
                <Position>
                  <Heading4>Select Server</Heading4>
                  <img src={itemImg} alt="item" />
                  <Select name="server">
                    <Option value="euw">EUW</Option>
                    <Option value="eus">EUS</Option>
                  </Select>
                </Position>
              </Positions>

              <Basket>
                <Header>
                  <Heading4>My Order</Heading4>
                </Header>
                <BasketBody>
                  <BBInfo>
                    <BBTitle>Completion Time</BBTitle>
                    <Heading6>1 Day</Heading6>
                  </BBInfo>
                  <BBInfo>
                    <BBTitle>Extra Options</BBTitle>
                    <Heading6>Champion ($5)</Heading6>
                    <Heading6>Champion ($5)</Heading6>
                  </BBInfo>
                  <BBInfo>
                    <BBTitle>You Earn</BBTitle>
                    <Heading6>12 Fox Coins (1.4$)</Heading6>
                  </BBInfo>
                  <BBDetail>
                    <BBTitle>Final Price</BBTitle>
                    <Heading3>$34</Heading3>
                  </BBDetail>
                  <ButtonContainer>
                    <BtnPrimary>Rank Up</BtnPrimary>
                  </ButtonContainer>
                </BasketBody>
              </Basket>
            </ContentSlide>

            <Divider />
          </section>

          <SmallContainer>

            <section className="section">
              <MainTag>Some addings for you </MainTag>
              <Heading3>Extra Options</Heading3>
              <Body3>
                Lol Boosting provides cheap WoW boosting of all types: character
                or PvP boosting, raid or dungeons carry, Powerleveling, farming &
                many more to save your time. Book a slot in our live chat and
                enjoy WoW boost!{" "}
              </Body3>

              <ExtraOptions>
                <Extra>Spell Buttons</Extra>
                <Extra>Spell Buttons</Extra>
                <Extra>Spell Buttons</Extra>
                <Extra>Spell Buttons</Extra>
                <Extra>Spell Buttons</Extra>
              </ExtraOptions>

              <ExtraInfo>
                <Body3>This option +10% to final price </Body3>
              </ExtraInfo>

              <Body3>
                Would you like to see how a Challenger player plays on your
                account in your elo? By enabling this option we will set up a
                private stream specifically for you! Your booster will also be
                able to chat with you, provide you rank up images and send you
                VODs / recordings of the games played. Your replays will be sent
                to you after order completion on your e-mail. If you wish us to
                send them to you, please write it in the notes or notify us before
                we initiate your order.
              </Body3>
            </section>

            <section className="section">
              <MainTag>Some addings for you </MainTag>
              <Heading3>What You Will Get</Heading3>

              <WhatYouWrap>
                <WhatYou>
                  <img src={what} alt="icon" />
                  <Heading4>Pre Ranked</Heading4>
                  <Body3>
                    Lol Boosting provides cheap WoW boosting of all types:
                    character or PvP boosting, raid or dungeons carry,
                    Powerleveling, farming & many more
                  </Body3>
                </WhatYou>
                <WhatYou>
                  <img src={what} alt="icon" />
                  <Heading4>Pre Ranked</Heading4>
                  <Body3>
                    Lol Boosting provides cheap WoW boosting of all types:
                    character or PvP boosting, raid or dungeons carry,
                    Powerleveling, farming & many more
                  </Body3>
                </WhatYou>
                <WhatYou>
                  <img src={what} alt="icon" />
                  <Heading4>Pre Ranked</Heading4>
                  <Body3>
                    Lol Boosting provides cheap WoW boosting of all types:
                    character or PvP boosting, raid or dungeons carry,
                    Powerleveling, farming & many more
                  </Body3>
                </WhatYou>
              </WhatYouWrap>
            </section>

            <section className="section">
              <MainTag>Ordering procedure</MainTag>
              <Heading3>How It Works</Heading3>
              <How>
                <HowList>
                  <Body3>Place an order choosing options you need</Body3>
                </HowList>
                <HowList>
                  <Body3>
                    We will contact you via our live chat or by sending an email.
                    All the details will be discussed beforehand and the start
                    time will be set according to your schedule.
                  </Body3>
                </HowList>
                <HowList>
                  <Body3>Place an order choosing options you need</Body3>
                </HowList>
              </How>
            </section>

            <section className="section">
              <MainTag>About this item</MainTag>
              <Heading3>Product Description</Heading3>
              <Desc>
                The last boss of every raid in WoW is usually very difficult to
                defeat even in Normal mode. However, with proper gear and an
                experienced team, it is more than real. To defeat Sylvanas
                Windrunner you need to get through 3 phases and bring Sylvanas
                health down to 50%. At mythic difficulty SoD Sylvanas Windrunner
                kill will be counted at 45% of her health.{" "}
              </Desc>
              <Desc>
                The last boss of every raid in WoW is usually very difficult to
                defeat even in Normal mode. However, with proper gear and an
                experienced team, it is more than real. To defeat Sylvanas
                Windrunner you need to get through 3 phases and bring Sylvanas
                health down to 50%. At mythic difficulty SoD Sylvanas Windrunner
                kill will be counted at 45% of her health.{" "}
              </Desc>
              <Desc>
                The last boss of every raid in WoW is usually very difficult to
                defeat even in Normal mode. However, with proper gear and an
                experienced team, it is more than real. To defeat Sylvanas
                Windrunner you need to get through 3 phases and bring Sylvanas
                health down to 50%. At mythic difficulty SoD Sylvanas Windrunner
                kill will be counted at 45% of her health.{" "}
              </Desc>
            </section>
          </SmallContainer>


          <Feedback>
            <Center>
              <MainTag>Review and Feedback</MainTag>
              <Heading2>Leave us a feedback</Heading2>
              <Body3>You can leave here feedback and read user’s reviews</Body3>
            </Center>

            <Rating>
              <p>
                <Heading2>4.9</Heading2>
              </p>
              <img src={star} alt="star" />
              <img src={ratingLogo} alt="" />
            </Rating>

            <Reviews>
              <TellUs>
                <ReviewTitle>Tell us about your experience</ReviewTitle>
                <Body4>Your overall rating</Body4>
                <RatingInput>
                  <img src={ratingStar} alt='icon' />
                  <img src={ratingStar} alt='icon' />
                  <img src={ratingStar} alt='icon' />
                  <img src={ratingStar} alt='icon' />
                  <img src={ratingStar} alt='icon' />
                </RatingInput>
                <ReviewForm>
                  <Input placeholder="Title" type="text" />
                  <Input placeholder="Name" type="text" />
                  <Input placeholder="Email" type="email" />
                  <Message placeholder="Review text" />
                  <ButtonContainer>
                    <BtnSubmit>Send Review</BtnSubmit>
                  </ButtonContainer>
                </ReviewForm>
              </TellUs>

              <ReviewTotal>
                <ReviewTitle>2 of 132 Reviews</ReviewTitle>

                <ReviewCard>
                  <Heading6>Fantastic Job</Heading6>
                  <Body3>
                    Good purchase Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </Body3>
                  <Verified>
                    <img src={check} alt="icon" /> Verified purchased
                  </Verified>
                </ReviewCard>
                <ReviewCard>
                  <Heading6>Fantastic Job</Heading6>
                  <Body3>
                    Good purchase Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </Body3>
                  <Verified>
                    <img src={check} alt="icon" /> Verified purchased
                  </Verified>
                </ReviewCard>
              </ReviewTotal>
            </Reviews>
          </Feedback>
        </div>
      </MainRight>
    </>
  );
};

export default connect(ProductSlider);

const MainRight = styled.div`
  margin-left: 375px;
  width: calc(100% - 375px);

  & input {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 100%;
    margin-left: unset;
  }
`;

const ContentSlide = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Positions = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;

  & select {
    margin-bottom: 10px;
    width: 100%;
  }

  @media ${device.laptop} {
    flex-wrap: nowrap;
  }
  
`;

const Position = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

  & img {
    margin: 40px 0 50px 0;
  }
`;

const Basket = styled.div`
  border-radius: 12px;
  box-shadow: 0px 4px 30px 0px #3232321a;
  min-width: 300px;
`;

const Header = styled.div`
  background: url(${bgBasket}) no-repeat;
  background-size: cover;
  padding: 20px;
  color: #fff;
  border-radius: 12px;
`;

const BasketBody = styled.div`
  padding: 20px;
`;

const BBInfo = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #ebeff8;
  text-align: center;

  & h6 {
    color: var(--text-dark);
  }
`;

const BBTitle = styled(Heading7)`
  margin-bottom: 6px;
  color: var(--primary-pressed);
`;

const BBDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const ExtraOptions = styled.div`
  display: flex;
  gap: 14px;
  margin: 20px 0;
`;

const Extra = styled.span`
  padding: 16px 26px;
  border-radius: 12px;
  background: #ebeff8;
  white-space: nowrap;
`;

const ExtraInfo = styled.div`
  margin-bottom: 20px;
  display: flex;
`;

const WhatYouWrap = styled.div`
  display: flex;
  gap: 70px;
  margin-top: 20px;
`;

const WhatYou = styled.div`
  & img {
    margin-bottom: 20px;
  }
`;

const How = styled.ul`
  margin-top: 20px;
  counter-reset: counter-list;
  position: relative;
  padding: 0;
`;

const HowList = styled.li`
  margin: 0 0 20px 40px;
  list-style: none;

  &::before {
    counter-increment: counter-list;
    content: counter(counter-list);
    position: absolute;
    left: 0;
    background: url(${count});
    border-radius: 8px;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    color: #5479e5;
  }
`;

const Desc = styled(Body3)`
  margin-top: 20px;
  display: block;
`;

const Feedback = styled.section`
  margin-top: 120px;
`;

const Rating = styled.div`
  background: linear-gradient(
    104.22deg,
    #ebf3ff 8.44%,
    rgba(255, 255, 255, 0.2) 59.55%,
    #f4e6ff 103.63%
  );
  backdrop-filter: blur(30px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 30px;
  padding: 20px;
  text-align: center;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 40px auto;
`;

const Reviews = styled.div`
  display: flex;
  gap: 90px;
  margin-top: 40px;
`;

const TellUs = styled.div`
  margin-bottom: 60px;
`;

const RatingInput = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 5px;
`

const ReviewTitle = styled(Heading4)`
  margin-bottom: 20px;
`;

const ReviewForm = styled.form`
  margin-top: 20px;
`;

const Message = styled.textarea`
  border: none;
  width: 100%;
  background: #ebeff8;
  border-radius: 6px;
  padding: 10px;
  font-family: inherit;
`;

const BtnSubmit = styled(BtnPrimary)``;

const ReviewTotal = styled(TellUs)``;

const ReviewCard = styled.div`
  margin-bottom: 30px;
`;

const Verified = styled.div`
  color: #169649;
  margin-top: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
`;
