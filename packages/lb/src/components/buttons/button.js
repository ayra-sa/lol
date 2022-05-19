import { styled } from "frontity";
import arrowUp from '../images/icons/arrow-up.svg'
import arrowUpPurple from '../images/icons/arrow-up-purple.svg'


const Btn = styled.button`
    border-radius: 12px;
    padding: 16px 26px;
    display: flex;
    font-size: 1em;
    line-height: 19px;
    font-family: var(--font);
    cursor: pointer;
    align-items: center;
    column-gap: 10px;
    font-weight: 700;
    transition: .3s ease-in;
`

const ArrowUp = styled.img``

export const Button = ({ onClick, children, className, type }) => {
    return <Btn className={className} type={type} onClick={onClick}>{children} <ArrowUp src={arrowUp} alt='icon' /></Btn>
}

export const ButtonSecond = ({ onClick, children, className }) => {
    return <Btn className={className} onClick={onClick}>{children} <ArrowUp src={arrowUpPurple} alt='icon' /></Btn>
}