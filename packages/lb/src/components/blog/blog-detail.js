import { connect, styled } from "frontity";
import React from "react";
import { Body1, Body2, Body3, Heading2, Heading3, Heading4 } from "../typography/text";
import blogImage from "../images/latest-img.png";
import { BtnPrimary } from "../buttons/button-primary";
import { MainTag } from "../typography/main-tag";
import { ButtonContainer } from "../buttons/button-container";
import { Divider } from "../other/divider";
import blogImg from "../images/latest-img.png";
import like from "../images/icons/like.svg";
import chatBlack from "../images/icons/chat-black.svg";
import unlike from "../images/icons/unlike.svg";
import Link from "@frontity/components/link";
import { Special } from "../typography/special-tag";
import { device } from "../queries";
import { Wrap } from "../contianer/wrap";
import { DecorTitle2 } from "../typography/decor-title";
// import { BsChatSquareFill } from "react-icons/bs";


const BlogDetail = () => {
  return (
    <>
      <BlogDetailWrap>
        <Heading2>
          Get the Baby Murloc Satch-Shells Transmog with the Purchase of a
          6-Month Subscription!
        </Heading2>
        <Body1>
          Introducing the eggcelent Baby Murloc Satch-Shells transmog — now
          available to add to your collection! You’ll be able to carry this
          adorable back-slot transmog item everywhere you go when you purchase
          in-game or from the Blizzard Shop.
        </Body1>
        <Info>
          <Date>23.12.2021</Date>
          <Author>by James Smith</Author>
          <Comment>
            <img src={chatBlack} alt='icon' />
            212
          </Comment>
        </Info>

        <BDetailImage src={blogImage} alt="blog" />
        <Heading4>
          A group of Activision Blizzard workers officially announced a strike
          fund Thursday morning following two days of walkouts in support of
          quality assurance
        </Heading4>
        <Body3>
          The group, called ABK Workers’ Alliance, came together in July after
          California’s Department of Fair Employment and Housing (DFEH) filed a
          lawsuit preceded by a two-year investigation into the company’s
          alleged “frat boy culture.” Activision Blizzard workers are not
          officially unionized, which means that the strike, initiated Thursday,
          will not have union protections. The group is being assisted by the
          Communication Workers of America, the Washington Post reported.
          Employees began signing union cards Thursday in an effort to get the
          group recognized, according to the report. It’s unclear how many
          workers are participating in the strike, which has been ongoing since
          Monday. More than 1,700 contracted workers and employees signed a
          petition in November demanding that CEO Bobby Kotick resign.
        </Body3>

        <BDetailImage src={blogImage} alt="blog" />
        <Body3>Image: Allen J. Schaben/Los Angeles Times/Getty Images</Body3>

        <Divider />

        <Content>
          <Heading4>
            Where they are raising money for a strike fund, ABK Workers’
            Alliance leaders said Activision Blizzard leadership has only
            continued to ignore demands
          </Heading4>
          <Body3>
            Some QA workers at Activision Blizzard and its subsidiaries have
            walked out of work each day since Monday, in protest of layoffs last
            week. (Activision Blizzard doesn’t characterize these job losses as
            layoffs, however: The company said that these people were temporary
            contract workers, not employees, and that it was not renewing their
            contracts.) Activision Blizzard is in the process of converting 500
            temporary jobs to full-time status, the company said — though the
            group of Raven Software QA workers were not part of that initiative.
          </Body3>
        </Content>

        <Content>
          <Heading4>
            “We are all disposable to this company,” one striking worker told
            Polygon. “We need to band together or we will never get anywhere.
            [...] If I lose my job due to unionizing, fine, but I’d rather make
            this place worth working here.”
          </Heading4>
          <Body3>
            The video game industry has been moving slowly toward unionization
            over the past few years, but no company in the United States has
            become officially recognized. Last year, a group of workers that
            write for mobile app Lovestruck: Choose Your Romance banded together
            for a 21-day strike — and won. It was the first successful game
            worker strike in the industry history.
          </Body3>
        </Content>

        <Divider />

        <Comments>
          <Heading3>212 comments to this article:</Heading3>
          <CommentBox>
            <Name>Mark Jacobs</Name>
            <Body3>
              While I’m still not sure unionization will have the desired effect
              re: abuse of female employees(given that that’s a case of majority
              employees abusing a minority), it definitely will in terms of
              crunch and maintaining permanent positions vs. contract labor.
              Overall, I hope they succeed.
            </Body3>
            <CommentAction>
              <Date>23.12.2021</Date>
              <CommentReact>
                <Like>
                  <img src={like} alt='icon' />
                  212
                </Like>
                <Unlike>
                  <img src={unlike} alt='icon' />
                  212
                </Unlike>
              </CommentReact>
            </CommentAction>
          </CommentBox>
          <CommentBox>
            <Name>Mark Jacobs</Name>
            <Body3>
              While I’m still not sure unionization will have the desired effect
              re: abuse of female employees(given that that’s a case of majority
              employees abusing a minority), it definitely will in terms of
              crunch and maintaining permanent positions vs. contract labor.
              Overall, I hope they succeed.
            </Body3>
            <CommentAction>
              <Date>23.12.2021</Date>
              <CommentReact>
                <Like>
                  <img src={like} alt='icon' />
                  212
                </Like>
                <Unlike>
                  <img src={unlike} alt='icon' />
                  212
                </Unlike>
              </CommentReact>
            </CommentAction>
          </CommentBox>
          <CommentBox>
            <Name>Mark Jacobs</Name>
            <Body3>
              While I’m still not sure unionization will have the desired effect
              re: abuse of female employees(given that that’s a case of majority
              employees abusing a minority), it definitely will in terms of
              crunch and maintaining permanent positions vs. contract labor.
              Overall, I hope they succeed.
            </Body3>
            <CommentAction>
              <Date>23.12.2021</Date>
              <CommentReact>
                <Like>
                  <img src={like} alt='icon' />
                  212
                </Like>
                <Unlike>
                  <img src={unlike} alt='icon' />
                  212
                </Unlike>
              </CommentReact>
            </CommentAction>
          </CommentBox>
        </Comments>

        <ButtonContainer>
          <BtnPrimary>load 10 more Comments</BtnPrimary>
        </ButtonContainer>

        <Opinion>
          <MainTag>Leave your opinion</MainTag>
          <Heading3>Have something to say?</Heading3>
          <Form>
            <TopInput>
              <Input placeholder="Name" type="text" />
              <Input placeholder="Email" type="email" />
            </TopInput>

            <Message placeholder="Your comment" />
          </Form>
        </Opinion>
      </BlogDetailWrap>

      <div className="container">
        <BlogBtm>
          <Wrap>
            <MainTag>Related articles</MainTag>
            <DecorTitle2>You can also like to read</DecorTitle2>
          </Wrap>

          <BlogRelated>
            <BlogCard link="/detail">
              <BlogTop>
                <Label>WOW</Label>
                <BlogImage src={blogImg} alt="blog" />
                <BlogInfo>
                  <Body2>12 Nov 2021</Body2>
                  <CommentThumb>
                    <span>212</span>
                  </CommentThumb>
                </BlogInfo>
              </BlogTop>
              <BlogDet>
                <Heading3>
                  Get the Baby Murloc Satch-Shells Transmog with the Purchase of
                  a 6-Month Subscription!
                </Heading3>
                <Body3>
                  Introducing the eggcelent Baby Murloc Satch-Shells transmog*—
                  now available to add to your collection! You’ll be able to
                  carry this adorable...
                </Body3>
              </BlogDet>
            </BlogCard>
            <BlogCard link="/detail">
              <BlogTop>
                <Label>WOW</Label>
                <BlogImage src={blogImg} alt="blog" />
                <BlogInfo>
                  <Body2>12 Nov 2021</Body2>
                  <CommentThumb>
                    <span>212</span>
                    {/* <BsChatSquareFill /> <span>212</span> */}
                  </CommentThumb>
                </BlogInfo>
              </BlogTop>
              <BlogDet>
                <Heading3>
                  Get the Baby Murloc Satch-Shells Transmog with the Purchase of
                  a 6-Month Subscription!
                </Heading3>
                <Body3>
                  Introducing the eggcelent Baby Murloc Satch-Shells transmog*—
                  now available to add to your collection! You’ll be able to
                  carry this adorable...
                </Body3>
              </BlogDet>
            </BlogCard>
          </BlogRelated>

          <ButtonContainer>
              <BtnPrimary>Read More News</BtnPrimary>
          </ButtonContainer>
        </BlogBtm>
      </div>
    </>
  );
};

export default connect(BlogDetail);

const BlogDetailWrap = styled.div`
  width: 80%;
  /* padding: 0 20px; */
  margin-top: 140px;
  margin-inline: auto;
  
  @media ${device.laptop} {
    width: 50%;
  }

`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  color: #6e7687;
  gap: 20px;
`;

const Date = styled(Body3)``;
const Author = styled(Body3)`
  padding: 0 20px;
  border-left: 1px solid #D0D5DF;
  border-right: 1px solid #D0D5DF;
`;

const Comment = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const BDetailImage = styled.img`
  margin: 40px 0 20px 0;
  border-radius: 20px;
`;

const Content = styled.div`
  margin-top: 20px;
`;

const Comments = styled.div`
  margin: 60px 0 40px 0;
`;

const CommentBox = styled.div`
  margin-top: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #d0d5df;
`;

const Name = styled(Heading4)`
  margin-bottom: 20px;
`;

const CommentAction = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const CommentReact = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Like = styled.div`
  display: flex;
  gap: 10px;
  background: linear-gradient(89.67deg, #5479E6 0.26%, #6B7AFF 99.71%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
align-items: center;
`

const Unlike = styled(Like)``

const Opinion = styled.div`
  margin-top: 100px;
  text-align: center;
`;

const Form = styled.form`
  margin: 40px 0;
  width: 100%;
`;

const TopInput = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Input = styled.input`
  background: #ebeff8;
  border-radius: 6px;
  padding: 10px;
  border: none;
  margin-bottom: 20px;
  width: -webkit-fill-available;
`;

const Message = styled.textarea`
  background: #ebeff8;
  border-radius: 6px;
  padding: 10px;
  border: none;
  margin-bottom: 20px;
  font-family: inherit;
  width: -webkit-fill-available;
`;

const BlogBtm = styled.section`
  margin-bottom: 60px;

`

const BlogRelated = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 90px;
    flex-direction: column;

    @media ${device.laptop} {
      flex-direction: row;
    }
`

const BlogCard = styled(Link)`
  border-radius: 20px;
  cursor: pointer;
`;

const BlogTop = styled.div`
  position: relative;
  display: flex;
  width: auto;
`;

const Label = styled(Special)`
    position: absolute;
    inset: 30px auto auto 30px;
`

const BlogImage = styled.img`
  border-radius: 20px;
  /* margin-top: 40px; */
  height: 100%;
`;

const BlogInfo = styled.div`
  color: #fff;
  position: absolute;
  z-index: 2;
  inset: auto 0 0 0;
  padding: 30px;
  display: flex;
  align-items: center;
  margin-top: auto;
  justify-content: space-between;

  & span,
  p {
    color: #fff;
  }
`;

const CommentThumb = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
const BlogDet = styled.div`
  margin-top: 20px;
`;