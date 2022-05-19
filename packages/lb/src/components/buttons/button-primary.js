import { styled } from "frontity";
import { Button } from "./button";

export const BtnPrimary = styled(Button)`
    background: var(--primary-default);
    border: 1px solid;
    border-image-source: linear-gradient(94.43deg, rgba(255, 255, 255, 0.6) 2.5%, rgba(255, 255, 255, 0) 62.83%, rgba(255, 255, 255, 0.4) 98.5%);
    color: #fff;


    &:hover {
        background: var(--primary-hover);
    }
`