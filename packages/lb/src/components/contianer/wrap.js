import { styled } from "frontity";
import { device } from "../queries";

export const Wrap = styled.div`
    width: 100%;
    display: inline-block;
    margin-inline: auto;

    @media ${device.laptop} {
        width: 60%;
    }
`