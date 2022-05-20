import { styled } from 'frontity'
import { Heading2 } from './text'
import burst from '../images/Burst-pucker-2.svg'
import hlReview from '../images/hl-review.svg'


export const DecorTitle = styled(Heading2)`
  position: relative;

  &::after {
    content: url(${burst});
    margin-left: 20px;
    position: relative;
  }
`

export const DecorTitle2 = styled(Heading2)`
  position: relative;

  &::after {
    content: url(${hlReview});
    position: absolute;
    inset: -50% auto auto -15%;
    /* inset: -15% auto auto 25%; */
  }
`

export const DecorTitle3 = styled(Heading2)`
  position: relative;

  &::before {
    content: url(${burst});
    position: absolute;
    inset: -60% auto auto -40%;
  }

  &::after {
    content: url(${burst});
    position: absolute;
    inset: 60% -40% auto auto;
  }


`