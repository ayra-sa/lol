import { connect, styled } from "frontity";
import React from "react";
import { ButtonContainer } from "../buttons/button-container";
import { BtnPrimary } from "../buttons/button-primary";
import { Center } from "../typography/center";
import { MainTag } from "../typography/main-tag";
import { Body3, Body4, Body5, Heading2, Heading3, Heading4 } from "../typography/text";
import { device } from "../queries";
import itemImg from "../images/order/item.png"
import { Dot } from "../typography/dot";
import { Cards } from "../card";
import bgImg from '../images/hero-bg.png'
import badge from '../images/badge.png'
import { Input, Option, Select } from "../form/input";


const Order = () => {
  return (
    <>
      <OrderHero>
        <MainTag>Your order is in progress</MainTag>
        <Heading2>My Orders <Dot>Demo</Dot></Heading2>
        <Badge>
          <img src={badge} alt='icon' />
          <Heading3>Silver 3 to platinum 4</Heading3>
        </Badge>
      </OrderHero>

      <div className="container">
        <OrderCol>
          <Items>
            <ItemBox>
              <Heading4>Initial</Heading4>
              <img src={itemImg} alt='item' />
              <Level>Silver 3</Level>
            </ItemBox>
            <ItemBox>
              <Heading4>Initial</Heading4>
              <img src={itemImg} alt='item' />
              <Level>Silver 3</Level>
            </ItemBox>
            <ItemBox>
              <Heading4>Initial</Heading4>
              <img src={itemImg} alt='item' />
              <Level>Silver 3</Level>
            </ItemBox>
          </Items>

          <Gift>
            <GiftAbout>
              <Heading3>Playing As Lulu</Heading3>
              <Body4>23.11 till 25.11</Body4>
            </GiftAbout>
            <GiftBody>
              <Center>
                <Headline>Summoner Spell (Heal, Cleanse)</Headline>
                <Body4>Extra Options</Body4>
              </Center>

              <Body4>Enter amount</Body4>
              <Amount>
                <AmountInputs>
                  <Input type='number'/>
                  <Select name='select'>
                    <Option value='USD'>USD</Option>
                    <Option value='USD'>IDR</Option>
                    <Option value='USD'>Yen</Option>
                  </Select>
                </AmountInputs>
                <BtnPrimary>Add Gift Player</BtnPrimary>
              </Amount>
            </GiftBody>
          </Gift>

          <History>
            <Heading3>Win history</Heading3>
            <Win>
              <Player>Lulu</Player>
              <Info>
                <Heading3>Win</Heading3>
                <Body4>(11.12 at 23:42)</Body4>
              </Info>
              <Date>12/3/21</Date>
              <Code>14042</Code>
            </Win>
            <Win>
              <Player>Lulu</Player>
              <Info>
                <Heading3>Win</Heading3>
                <Body4>(11.12 at 23:42)</Body4>
              </Info>
              <Date>12/3/21</Date>
              <Code>14042</Code>
            </Win>
            <Loose>
              <Player>Lulu</Player>
              <LooseInfo>
                <Heading3>Win</Heading3>
                <Body4>(11.12 at 23:42)</Body4>
              </LooseInfo>
              <Date>12/3/21</Date>
              <Code>14042</Code>
            </Loose>
          </History>

          <ChatWrap>
            <Heading3>Chat With Us</Heading3>
            <ChatBox>
              <ChatInfo>
                <Profile>G</Profile>
                <MessageDetails>
                  <Message>How can i log in?</Message>
                  <Time>12.09 at 10.23</Time>
                </MessageDetails>
              </ChatInfo>

              <ChatType>
                  <Input placeholder="Type message" type='text' />
                  <BtnPrimary>Send</BtnPrimary>
              </ChatType>
            </ChatBox>
          </ChatWrap>
        </OrderCol>

        <section className="section">
          <MainTag>You may like it</MainTag>
          <Heading2>Related products</Heading2>
          <Column3>
            <Cards />
            <Cards />
            <Cards />
          </Column3>

          <ButtonContainer>
              <BtnPrimary>Go To All Product</BtnPrimary>
          </ButtonContainer>
        </section>

        <section className="section">
            <Help>
                <HelpTop>
                    <MainTag>Help</MainTag>
                    <Heading2>Need future assistance?</Heading2>
                    <Body3>Feel free to mail us or look in the bottom left corner!</Body3>
                </HelpTop>
                <BtnPrimary>Contact Us</BtnPrimary>
            </Help>
        </section>
      </div>
    </>
  );
};

export default connect(Order);

const OrderHero = styled.section`
    background: url(${bgImg}) no-repeat center;
    background-size: cover;
    margin-top: 80px;
    padding: 5% 0;
    text-align: center;
`

const Badge = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const OrderCol = styled.div`
margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 100px;
    row-gap: 40px;

    & input, select, option {
      margin-bottom: 0 !important;
    }
    
    @media ${device.laptop} {
        grid-template-columns: repeat(2, 1fr);

      }

`

const Items = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
`

const ItemBox = styled.div`
    background: var(--border-gradient);
    border-radius: 14px;
    padding: 15px 40px;
    box-sizing: content-box;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

      @media ${device.laptop} {
        width: fit-content;
      }

`

const Level = styled(Heading3)`
    color: #5479E5;
`

const Gift = styled.div`
    border: 1px solid #DABCFF;
    /* border-image-source: linear-gradient(89.26deg, #DABCFF 0.57%, #BFB5FF 100.29%) 1; */
    /* padding: 0 20px 20px 20px; */
    border-radius: 20px;
`

const GiftAbout = styled.div`
    background: #E7ECFF;
    padding: 20px 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    text-align: center;
`

const GiftBody = styled.div`
    margin-top: 20px;
    padding: 20px;
`

const Headline = styled(Heading3)`
    color: #5479E5;
    margin-bottom: 10px;
`

const Amount = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    row-gap: 20px;

  @media ${device.laptop} {
    flex-direction: row;
  }


`

const AmountInputs = styled.form`
    display: flex;
    gap: 10px;
`

const History = styled.div`
    margin-top: 40px;
`

const Win = styled.div`
    background: var(--secondary-hover);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 20px;

`

const Player = styled(Heading4)``

const Info = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    color: #169649;

    & h3 {
      margin-bottom: 0;
    }

    & span {
      color: #169649;
    }
    /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(0deg, #169649, #169649); */
`

const Date = styled(Heading4)``
const Code = styled(Heading4)``

const Loose = styled.div`
    background: #FFF1F0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 20px;

`

const LooseInfo = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    color: #F31E1E;

    & h3 {
      margin-bottom: 0;
    }

    & span {
      color: #F31E1E;
    }
`

const ChatWrap = styled.div`
    margin-top: 40px;
`

const ChatBox = styled.div`
    background: var(--border-gradient);
    box-sizing: content-box;
    /* border-image: linear-gradient(89.26deg, #DABCFF 0.57%, #BFB5FF 100.29%) 1;
    border-radius: 20px; */
    min-height: 500px;
    padding: 20px;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const ChatInfo = styled.div`
    display: flex;
    gap: 10px;
`

const Profile = styled.div`
    background: linear-gradient(89.67deg, #3D3AE8 0.26%, #664FF1 99.71%);
    width: 50px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
`

const MessageDetails = styled.div``

const Message = styled.span`
    border-radius: 0px 8px 8px 8px;
    background: #D6E4FF;
    padding: 12px 24px;
    display: block;
`

const Time = styled(Body5)`
    margin-top: 5px;
`

const ChatType = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 12px;
    background: #EFF1F5;
    padding: 2px;
    margin-top: 40px;
`

const Column3 = styled.div`
display: flex;
overflow: scroll;
  gap: 30px;
  margin-top: 40px;
  
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: unset;
  }
  
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow: unset;
  }
`;

const Help = styled.div`
    padding: 80px 0;
    background: url(${bgImg}) no-repeat center;
    background-size: cover;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const HelpTop = styled.div`
    margin-bottom: 40px;
`