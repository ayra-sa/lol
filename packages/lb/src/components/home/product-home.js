import { styled } from "frontity";
import { BtnPrimary } from "../buttons/button-primary";
import { ButtonWrap } from "../buttons/button-wrap";
import { device } from "../queries";
import { Hot } from "../typography/hot-tag";
import { MainTag } from "../typography/main-tag";
import { Special } from "../typography/special-tag";
import { Body4, Heading2, Heading3, Heading7 } from "../typography/text";
import Chara from "../images/pngitem-wow.png";
import burst from '../images/Burst-pucker-2.svg'
import Chara2 from "../images/pngkey_wow2.png";
import cardDecor from '../images/suggest-bg.png'
import cardDecor2 from '../images/suggest-bg2.png'


const ProductHome = () => {
    return (
        <Product>
            <MainTag>Our Suggestion</MainTag>
            <ProductTitle>The Best Products</ProductTitle>

            <ProductBox>
              <ProductCard>
                <Hot>Hot Sale</Hot>

                <ProductInfo>
                  <Heading3>WOW Character</Heading3>
                  <ListWrap>
                    <ProductList><Body4>Stream on demand</Body4></ProductList>
                    <ProductList><Body4>Unlock flying</Body4></ProductList>
                  </ListWrap>
                  <Heading7>Heroic Sanctum of Domination for you sed ut perspiciatis unde omnis</Heading7>
                  <ButtonWrap>
                    <BtnPrimary>Buy</BtnPrimary>
                  </ButtonWrap>
                </ProductInfo>

                <Char src={Chara} alt="chara" />
              </ProductCard>

              <ProductCard>
                <Special>Special Offer</Special>

                <ProductInfo>
                  <Heading3>WOW Character</Heading3>
                  <ListWrap>
                    <ProductList><Body4>Stream on demand</Body4></ProductList>
                    <ProductList><Body4>Unlock flying</Body4></ProductList>
                  </ListWrap>
                  <Heading7>Heroic Sanctum of Domination for you sed ut perspiciatis unde omnis</Heading7>
                  <ButtonWrap>
                    <BtnPrimary>Buy</BtnPrimary>
                  </ButtonWrap>
                </ProductInfo>

                <Char src={Chara2} alt="chara" />
              </ProductCard>
            </ProductBox>
          </Product>
    )
}

export default ProductHome

const Product = styled.section`
  /* margin-top: 100px; */
`;

const ProductTitle = styled(Heading2)`
  position: relative;

  &::after {
    content: url(${burst});
    margin-left: 20px;
    position: relative;
  }
`

const ProductBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px;
  margin-top: 40px;

  @media ${device.laptop} {
    flex-wrap: nowrap;
  }
`;

const ProductCard = styled.div`
  /* background: #ebeff8; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-start;
  position: relative;
  min-height: 400px;
  padding: 20px;
  width: 100%;
  border-radius: 20px;

  &::after {
    content: '';
    background: url(${cardDecor}) no-repeat center;
    background-size: cover;
    border-radius: 20px;
    position: absolute;
    inset: 0;
    z-index: -1;
    
  }
  &:nth-last-child(1)::after {
    content: '';
    background: url(${cardDecor2}) no-repeat center;
    background-size: cover;
  }
  
  @media ${device.laptop} {
    width: 600px;

  }
`;

const ProductInfo = styled.div`
  width: 50%;
  margin-top: auto;
  position: relative;
  z-index: 1;
  `;

const ProductList = styled.li`
  color: var(--text-medium);
  `

const Char = styled.img`
  position: absolute;
  z-index: 1;
  inset: 0 0 0 auto;
  margin-top: -30px;
  height: 300px;
`;

const ListWrap = styled.ul`
  margin: 5px 0;
  padding-inline-start: 20px;
`
