import { styled } from "frontity";
import { device } from "../queries";
import { MainTag } from "../typography/main-tag";
import { Body2, Body3, Heading2 } from "../typography/text";
import star from "../images/star-rating.png";
import ratingLogo from "../images/Trustpilot.png";
import hlReview from '../images/hl-review.svg'
import bgGradient from "../images/review-bg.png";


const ReviewHome = () => {
    return (
        <Review>
        <div style={{ textAlign: "center" }}>
          <MainTag>Review and Feedback</MainTag>
          <ReviewTitle>
            Thousands of players <br />
            Constantly <Dot>Choose Us</Dot>
          </ReviewTitle>
          <Body3>
            Customers highly rate our service. We are always trying to do our
            best
          </Body3>
        </div>

        <Rating>
          <p><Heading2>4.9</Heading2></p>
          <img src={star} alt="star" />
          <img src={ratingLogo} alt="" />
        </Rating>

        <ReviewInfo>
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
        </ReviewInfo>
      </Review>
    )
}

export default ReviewHome

const ReviewTitle = styled(Heading2)`
  position: relative;

  &::after {
    content: url(${hlReview});
    position: absolute;
    inset: -15% auto auto 25%;
  }
`

const Review = styled.section`
  padding: 5%;
  margin-top: 100px;
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


const ReviewInfo = styled.div`
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
      /* border-left: 1px solid #fff;
      border-right: 1px solid #fff; */
    }
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