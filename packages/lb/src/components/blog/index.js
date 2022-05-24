import { connect, styled } from "frontity";
import React from "react";
import { BtnPrimary } from "../buttons/button-primary";
import { MainTag } from "../typography/main-tag";
import { Body2, Body3, Heading2, Heading3, Heading4, Heading5 } from "../typography/text";
import blogImage from "../images/latest-img.png";
import Link from "@frontity/components/link";
import { Special } from "../typography/special-tag";
import { Dot } from "../typography/dot";
import BlogCard from "./blog-card";
import search from "../images/icons/search.svg";
import { Input } from "../form/input";
import commentIcon from '../images/icons/chat.svg'
import { device } from "../queries";
import { DecorTitle3 } from "../typography/decor-title";
import { Wrap } from "../contianer/wrap";

const BlogsPage = () => {
  return (
    <>
      <BLogHero>
        <Wrap>
          <MainTag>Our blog</MainTag>
          <DecorTitle3>
            Latest <Dot>Articles</Dot> from <br /> popular gaming services
          </DecorTitle3>
        </Wrap>
      </BLogHero>

      <SelectWrap>
        <div className="container">
          <SelectNews>
            <NewsWrap>
              <News>
                <Heading5>All News</Heading5>
              </News>
              <News>
                <Heading5>Popular News</Heading5>
              </News>
              <News>
                <Heading5>Most Discussing</Heading5>
              </News>
              <News>
                <Heading5>Cybersport</Heading5>
              </News>
              <News>
                <Heading5>Gaming</Heading5>
              </News>
            </NewsWrap>
            <SearchNews>
              <Input placeholder="Search theme" type="text" />
              <img src={search} alt="icon" />
            </SearchNews>
          </SelectNews>
        </div>
      </SelectWrap>
      <div className="container">
        <BlogWrap>
          <BlogHead>
            <BlogCardWrap link="/detail">
              <BlogTop>
                <Label>WOW</Label>
                <BlogImage src={blogImage} alt="blog" />
                <BlogInfo>
                  <Body2>12 Nov 2021</Body2>
                  <Comment>
                    <img src={commentIcon} alt="icon" /> <span>212</span>
                  </Comment>
                </BlogInfo>
              </BlogTop>
              <BlogDetail>
                <Heading3>
                  Get the Baby Murloc Satch-Shells Transmog with the Purchase of
                  a 6-Month Subscription!
                </Heading3>
                <Body3>
                  Introducing the eggcelent Baby Murloc Satch-Shells transmog*—
                  now available to add to your collection! You’ll be able to
                  carry this adorable...
                </Body3>
              </BlogDetail>
            </BlogCardWrap>
            <BlogCardWrap link="/detail">
              <BlogTop>
                <Label>WOW</Label>
                <BlogImage src={blogImage} alt="blog" />
                <BlogInfo>
                  <Body2>12 Nov 2021</Body2>
                  <Comment>
                    <img src={commentIcon} alt="icon" /> <span>212</span>
                  </Comment>
                </BlogInfo>
              </BlogTop>
              <BlogDetail>
                <Heading3>
                  Get the Baby Murloc Satch-Shells Transmog with the Purchase of
                  a 6-Month Subscription!
                </Heading3>
                <Body3>
                  Introducing the eggcelent Baby Murloc Satch-Shells transmog*—
                  now available to add to your collection! You’ll be able to
                  carry this adorable...
                </Body3>
              </BlogDetail>
            </BlogCardWrap>
          </BlogHead>

          <MainTag>Latest news</MainTag>
          <Heading3>Most Commented News</Heading3>

          <Column3>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </Column3>

          <ButtonContainer>
            <BtnPrimary>Read More News</BtnPrimary>
          </ButtonContainer>
        </BlogWrap>
      </div>
    </>
  );
};

export default connect(BlogsPage);

const BLogHero = styled.div`
  margin-top: 80px;
  padding: 5% 0;
  text-align: center;
`;

const SelectWrap = styled.div`
  border-bottom: 4px solid #ebeff8;
`;

const SelectNews = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  @media ${device.laptop} {
      align-items: center;
      flex-direction: row;
    }

`;

const NewsWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  overflow-x: scroll;
`;

const News = styled.div``;

const SearchNews = styled.div`
min-width: 360px;
  background: #ebeff8;
  border-radius: 8px;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  & input {
    margin-bottom: 0;
  }
  `;

// const SearchIcon = styled(BiSearch)``

const BlogWrap = styled.div`
  margin-bottom: 60px;
`;

const BlogHead = styled.div`
  display: flex;
  gap: 90px;
  margin: 40px 0 60px 0;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const Column3 = styled.div`
  display: grid;
  column-gap: 30px;
  row-gap: 60px;
  grid-template-columns: 1fr;
  
  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

`;

const BlogCardWrap = styled(Link)`
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
`;

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

const Comment = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
const BlogDetail = styled.div`
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto 0 auto;
`;
