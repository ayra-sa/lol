import { styled } from "frontity";
import { device } from "../queries";

export const BlueText = styled.span`
    background: var(--primary-default);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const HeroTitle = styled.h1`
  font-size: 3em;
  line-height: 64px;
  margin-bottom: 20px;
  font-weight: 800;

  @media ${device.tablet} {
    font-size: 3.5em;
    line-height: 78px;
  }
`

export const Heading1 = styled.h1`
  font-weight: 700;
  font-size: 2.875em;
  line-height: 64px;
`

export const Heading2 = styled.h2`
  font-weight: 800;
  font-size: 2.375em;
  line-height: 53px;
  margin-bottom: 10px;
`

export const Heading3 = styled.h3`
  font-weight: 700;
  font-size: 1.375em;
  line-height: 33px;
  margin-bottom: 10px;
`

export const Heading4 = styled.h4`
  font-weight: 700;
  font-size: 1em;
  margin-bottom: 10px;
`

export const Heading5 = styled.h5`
  font-weight: 500;
  font-size: 1em;
`

export const Heading6 = styled.h6`
  font-weight: 700;
  font-size: .85em;
  color: #6E7687;
`

export const Heading7 = styled.span`
  font-weight: 700;
  font-size: .875em;
  line-height: 19px;
`

export const Body1 = styled.p`
  font-weight: 500;
  font-size: 1.1em;
  line-height: 32px;
`

export const Body2 = styled.p`
  font-weight: 600;
  font-size: .85em;
  color: #6E7687;
`

export const Body3 = styled.span`
  font-weight: 500;
  font-size: 1em;
  color: #6E7687;
  `

export const Body4 = styled.span`
  font-weight: 500;
  font-size: .875em;
  color: #6E7687;
`

export const Body5 = styled.span`
  font-weight: 400;
  font-size: .875em;
  color: #6E7687;
`
