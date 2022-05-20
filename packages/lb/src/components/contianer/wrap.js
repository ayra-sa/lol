import { styled } from "frontity";
import { device } from "../queries";

export const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;

    @media ${device.laptop} {
        width: 60%;
    }
`