import { css, Global, styled } from "frontity";
import { Body4 } from "../typography/text";

const Classes = css`
  .input {
    background: #ebeff8;
    border-radius: 6px;
    padding: 10px;
    border: none;
    margin-bottom: 20px;
    font-size: .875em;
    font-family: inherit;
  
    &:focus {
      outline: none;
      border: none;
    }
  }
`


export const Input = ({ placeholder, type, required, value, onChange }) => {
    return (
      <>
        <Global styles={Classes} />
        <input className='input' placeholder={placeholder} type={type} required={required} value={value} onChange={onChange} />
      </>
    )
}

export const Select = ({ name, children }) => {
    return (
      <>
        <Global styles={Classes} />
        <select className='input' name={name}>{children}</select>
      </>
    )
}

export const Option = ({ value, children }) => {
    return (
      <>
        <Global styles={Classes} />
        <option className='input' value={value}>{children}</option>
      </>
    )
}

export const Checkbox = ({ id, children }) => {
    return (
      <>
        <input type='checkbox' id={id} />
        <label htmlFor={id}><Body4>{children}</Body4></label>
      </>
    )
}
