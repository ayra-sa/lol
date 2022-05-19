import { styled } from "frontity";

const Tag = styled.span`
    padding: 6px 12px;
    background: var(--tag);
    color: var(--color-tag);
    font-weight: 700;
    font-size: .85em;
    line-height: 19px;
    margin-bottom: 10px;
    display: inline-block;
    border-radius: 3px;
`

export const MainTag = ({ children }) => {
    return <Tag>{children}</Tag>
}