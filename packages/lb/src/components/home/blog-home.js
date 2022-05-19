// import { BsChatSquareFill } from "react-icons/bs";
import { BtnPrimary } from "../buttons/button-primary";
import { MainTag } from "../typography/main-tag";
import {
  BlueText,
  Body2,
  Body3,
  Body5,
  Heading2,
  Heading3,
} from "../typography/text";
import blogImage from "../images/latest-img.png";
import { styled } from "frontity";
import { device } from "../queries";
import Link from "@frontity/components/link";
import commentIcon from "../images/icons/chat.svg";

const BlogHome = () => {
  return (
    <div className="container">
      <section className="section">
        <Blog>
          <BlogContent>
            <MainTag>Blog&News</MainTag>
            <Heading2>
              <BlueText>Latest Articles</BlueText> from a very popular gaming
              service
            </Heading2>
          </BlogContent>

          <BlogContent>
            <Body5>
              Articles lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliquaThe fine folks of Smokywood Pastures aren’t letting a little
              thing. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et{" "}
            </Body5>
          </BlogContent>
        </Blog>
        <BlogCardWrap>
          <BlogCard>
            <BlogTop>
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
                Get the Baby Murloc Satch-Shells Transmog with the Purchase of a
                6-Month Subscription!
              </Heading3>
              <Body3>
                Introducing the eggcelent Baby Murloc Satch-Shells transmog*—
                now available to add to your collection! You’ll be able to carry
                this adorable...
              </Body3>
            </BlogDetail>
          </BlogCard>
          <BlogCard>
            <BlogTop>
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
                Get the Baby Murloc Satch-Shells Transmog with the Purchase of a
                6-Month Subscription!
              </Heading3>
              <Body3>
                Introducing the eggcelent Baby Murloc Satch-Shells transmog*—
                now available to add to your collection! You’ll be able to carry
                this adorable...
              </Body3>
            </BlogDetail>
          </BlogCard>
        </BlogCardWrap>

        <BtnContainer>
          <BtnPrimary>Visit Blog</BtnPrimary>
        </BtnContainer>
      </section>
    </div>
  );
};

export default BlogHome;

const Blog = styled.div`
  display: flex;
  column-gap: 90px;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
  /* align-items: flex-start; */
`;

const BlogCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 90px;
  row-gap: 40px;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const BlogCard = styled(Link)`
  border-radius: 20px;
  cursor: pointer;
`;

const BlogTop = styled.div`
  position: relative;
  display: flex;
  width: auto;
`;

const BlogImage = styled.img`
  border-radius: 20px;
  margin-top: 40px;
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

const BtnContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const BlogContent = styled.div`
  width: 100%;

  @media ${device.laptop} {
    width: 50%;
  }
`;
