import Link from "@frontity/components/link";
import { connect, styled } from "frontity";
import { Special } from "../typography/special-tag";
import { Body2, Body3, Heading3 } from "../typography/text";
import blogThumb from "../images/blogs/blog-thumb.png";
import commentIcon from '../images/icons/chat.svg'


const BlogCard = () => {
  return (
    <BlogCardWrap link="/detail">
      <BlogTop>
        <Label>WOW</Label>
        <BlogImage src={blogThumb} alt="blog" />
        <BlogInfo>
          <Body2>12 Nov 2021</Body2>
          <Comment>
            <img src={commentIcon} alt='icon' /> <span>212</span>
          </Comment>
        </BlogInfo>
      </BlogTop>
      <BlogDetail>
        <Heading3>
          Get the Baby Murloc Satch-Shells Transmog with the Purchase of a 6-Month Subscription!
        </Heading3>
        <Body3>
          Introducing the eggcelent Baby Murloc Satch-Shells transmog*— now available to add to your collection! You’ll be able to carry this adorable...
        </Body3>
      </BlogDetail>
    </BlogCardWrap>
  );
};

export default connect(BlogCard)


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

const Comment = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
const BlogDetail = styled.div`
  margin-top: 20px;
`;