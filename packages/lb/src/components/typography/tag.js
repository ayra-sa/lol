import { styled } from "frontity";

const CardTagWrap = styled.span`
    padding: 3px 8px;
    border-radius: 3px;
    display: inline-block;
    color: #fff;
    font-weight: 700;
    font-size: .85em;
    line-height: 19px;
    white-space: nowrap;
    font-family: var(--font);
`

export const CardTag = ({ children, className }) => {
    return <CardTagWrap className={className}>{children}</CardTagWrap>
}