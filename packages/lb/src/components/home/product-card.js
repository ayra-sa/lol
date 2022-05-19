import { styled } from "frontity";
import { BtnPrimary } from "../buttons/button-primary";
import Link from "@frontity/components/link";
import { device } from "../queries";
import { MainTag } from "../typography/main-tag";
import { Most } from "../typography/most-tag";
import { Special } from "../typography/special-tag";
import { Body5, Heading2, Heading3 } from "../typography/text";
import bg from "../images/image 5.png";


const ProductCards = () => {
    return (
        <section className="section">
            <MainTag>Top Product</MainTag>
            <Heading2>Top World of Warcraft Products</Heading2>

            <Column3>
              <Card>
                <BgImage src={bg} alt="bg" />
                <CardInfo>
                  <CardTop>
                    <Most>Most popular</Most>
                    <Special>Special Offer</Special>
                  </CardTop>
                  <CardBody>
                    <CardBodyLeft>
                      <Heading3>WOW Character</Heading3>
                      <ListWrap>
                        <List><Body5>Stream on demand</Body5></List>
                        <List><Body5>Unlock flying</Body5></List>
                        <List><Body5>Unlock flying</Body5></List>
                      </ListWrap>
                      <Heading3>$89.99</Heading3>
                    </CardBodyLeft>
                    <Link link='/'>
                      <BtnPrimary>Buy</BtnPrimary>
                    </Link>
                  </CardBody>
                </CardInfo>
              </Card>
              <Card>
                <BgImage src={bg} alt="bg" />
                <CardInfo>
                  <CardTop>
                    <Most>Most popular</Most>
                    <Special>Special Offer</Special>
                  </CardTop>
                  <CardBody>
                    <CardBodyLeft>
                      <Heading3>WOW Character</Heading3>
                      <ListWrap>
                        <List><Body5>Stream on demand</Body5></List>
                        <List><Body5>Unlock flying</Body5></List>
                        <List><Body5>Unlock flying</Body5></List>
                      </ListWrap>
                      <Heading3>$89.99</Heading3>
                    </CardBodyLeft>
                    <Link link='/'>
                      <BtnPrimary>Buy</BtnPrimary>
                    </Link>
                  </CardBody>
                </CardInfo>
              </Card>
              <Card>
                <BgImage src={bg} alt="bg" />
                <CardInfo>
                  <CardTop>
                    <Most>Most popular</Most>
                    <Special>Special Offer</Special>
                  </CardTop>
                  <CardBody>
                    <CardBodyLeft>
                      <Heading3>WOW Character</Heading3>
                      <ListWrap>
                        <List><Body5>Stream on demand</Body5></List>
                        <List><Body5>Unlock flying</Body5></List>
                        <List><Body5>Unlock flying</Body5></List>
                      </ListWrap>
                      <Heading3>$89.99</Heading3>
                    </CardBodyLeft>
                    <Link link='/'>
                      <BtnPrimary>Buy</BtnPrimary>
                    </Link>
                  </CardBody>
                </CardInfo>
              </Card>
              <Card>
                <BgImage src={bg} alt="bg" />
                <CardInfo>
                  <CardTop>
                    <Most>Most popular</Most>
                    <Special>Special Offer</Special>
                  </CardTop>
                  <CardBody>
                    <CardBodyLeft>
                      <Heading3>WOW Character</Heading3>
                      <ListWrap>
                        <List><Body5>Stream on demand</Body5></List>
                        <List><Body5>Unlock flying</Body5></List>
                        <List><Body5>Unlock flying</Body5></List>
                      </ListWrap>
                      <Heading3>$89.99</Heading3>
                    </CardBodyLeft>
                    <Link link='/'>
                      <BtnPrimary>Buy</BtnPrimary>
                    </Link>
                  </CardBody>
                </CardInfo>
              </Card>
              <Card>
                <BgImage src={bg} alt="bg" />
                <CardInfo>
                  <CardTop>
                    <Most>Most popular</Most>
                    <Special>Special Offer</Special>
                  </CardTop>
                  <CardBody>
                    <CardBodyLeft>
                      <Heading3>WOW Character</Heading3>
                      <ListWrap>
                        <List><Body5>Stream on demand</Body5></List>
                        <List><Body5>Unlock flying</Body5></List>
                        <List><Body5>Unlock flying</Body5></List>
                      </ListWrap>
                      <Heading3>$89.99</Heading3>
                    </CardBodyLeft>
                    <Link link='/'>
                      <BtnPrimary>Buy</BtnPrimary>
                    </Link>
                  </CardBody>
                </CardInfo>
              </Card>
              <Card>
                <BgImage src={bg} alt="bg" />
                <CardInfo>
                  <CardTop>
                    <Most>Most popular</Most>
                    <Special>Special Offer</Special>
                  </CardTop>
                  <CardBody>
                    <CardBodyLeft>
                      <Heading3>WOW Character</Heading3>
                      <ListWrap>
                        <List><Body5>Stream on demand</Body5></List>
                        <List><Body5>Unlock flying</Body5></List>
                        <List><Body5>Unlock flying</Body5></List>
                      </ListWrap>
                      <Heading3>$89.99</Heading3>
                    </CardBodyLeft>
                    <Link link='/'>
                      <BtnPrimary>Buy</BtnPrimary>
                    </Link>
                  </CardBody>
                </CardInfo>
              </Card>
            </Column3>

            <BtnContainer>
              <BtnPrimary>Go To All Product</BtnPrimary>
            </BtnContainer>
          </section>
    )
}

export default ProductCards

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

const Card = styled.div`
  position: relative;
  height: 510px;
  display: block;
  
  @media ${device.laptop} {
    height: 100%;
  }

  &::after {
    content: "";
    background: linear-gradient(
      180deg,
      rgba(48, 80, 171, 0) 0%,
      rgba(46, 76, 164, 0.5) 22.54%,
      #223879 100%
    );
    position: absolute;
    inset: auto 0 0 0;
    height: 60%;
    border-radius: 20px;
  }
`;

const BgImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;

  @media ${device.laptop} {
    position: relative;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  z-index: 1;
  position: relative;
  white-space: nowrap;
  height: 90%;
  
  @media ${device.laptop} {
    position: absolute;
    inset: 0;
    height: unset;

  }
`;

const CardTop = styled.div`
  display: flex;
  column-gap: 10px;
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: #fff;
`;

const CardBodyLeft = styled.div`
  /* width: 50%; */
`;

const ListWrap = styled.ul`
  margin: 5px 0;
  padding-inline-start: 20px;
`

const List = styled.li`
  list-style: circle;

  & span {
    color: #fff;
  }
`;

const BtnContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;