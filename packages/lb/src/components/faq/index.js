import { connect, styled } from "frontity";
import React from "react";
import { BtnPrimary } from "../buttons/button-primary";
import { MainTag } from "../typography/main-tag";
import QuestComp from "../question";
import { Body3, Heading2 } from "../typography/text";
import { Dot } from "../typography/dot";
import hero from "../images/hero-bg.png";
import { device } from "../queries";

const FAQ = () => {
  return (
    <>
      <FAQHero>
        <MainTag>FAQs</MainTag>
        <Heading2>
          Have any <Dot>questions</Dot> to ask?
        </Heading2>
        <Body3>
          Eloboostleague is the world’s most advanced League of Legends boosting
          service. <br />
          Since Season 1, we’ve become one of the leading platforms for League
          of Legends boosting.
        </Body3>

        <FAQSearch>
          <Input placeholder="Write your question" />
          <BtnPrimary>Search The Answer</BtnPrimary>
        </FAQSearch>
      </FAQHero>

      <FAQBody>
        <FAQWrap>
          <Heading2>General questions</Heading2>

          <QuestComp />
          <QuestComp />
          <QuestComp />
          <QuestComp />
        </FAQWrap>

        <FAQWrap>
          <Heading2>General questions</Heading2>
          <QuestComp />
          <QuestComp />
          <QuestComp />
          <QuestComp />
          <QuestComp />
          <QuestComp />
          <QuestComp />
        </FAQWrap>

        <FAQWrap>
          <Heading2>General questions</Heading2>
          <QuestComp />
          <QuestComp />
          <QuestComp />
          <QuestComp />
        </FAQWrap>
      </FAQBody>
    </>
  );
};

export default connect(FAQ);

const FAQHero = styled.div`
  background: url(${hero}) no-repeat center;
  background-size: cover;
  margin-top: 80px;
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FAQSearch = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  
  @media ${device.laptop} {
      width: 60%;

  }

`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 50%;
`;

const FAQBody = styled.div`
  margin: 0 auto;
  width: 80%;
  margin-bottom: 60px;
  
  @media ${device.laptop} {
      max-width: 70%;

  }
`;

const FAQWrap = styled.div`
  margin-top: 60px;
  text-align: center;
`;
