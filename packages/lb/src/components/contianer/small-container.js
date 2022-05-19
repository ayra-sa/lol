import { styled } from "frontity";
import { device } from "../queries";

export const SmallContainer = styled.div`
  width: 100%;

  @media ${device.laptop} {
    width: 80%;
  }
`;
