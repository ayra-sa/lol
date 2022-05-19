import { styled } from "frontity";

const Title = styled.h1`
    font-size: 2.375em;
    line-height: 53px;
    font-weight: 800;
    text-transform: capitalize;
`

export const TitleContent = ({ children }) => {
    return <Title>{children}</Title>
}