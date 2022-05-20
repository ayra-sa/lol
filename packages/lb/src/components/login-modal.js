import { connect, styled } from 'frontity'
import React from 'react'
import { BtnPrimary } from './buttons/button-primary'
import Link from "@frontity/components/link";
import { Body5, Heading3, Heading6, Heading7 } from './typography/text'
import { Checkbox, Input } from './form/input';
import x from './images/icons/x.svg'
import eye from './images/icons/eye.svg'

const LoginModal = ({close}) => {

    const [passType, setPassType] = React.useState("Password")
    const [passInput, setPassInput] = React.useState("")

    const handlePassChange = event => {
        setPassInput(event.target.value)
    }

    const togglePass = () => {
        if (passType === "password") {
            setPassType("text")
            return
        }

        setPassType("password")
    }

    return (
        <LoginContainer>
            <LoginWrap>
                <Heading3>Login</Heading3>
                <XBtn onClick={() => close(false)}><img src={x} alt='icon' /></XBtn>
                <LoginForm>
                    <Input placeholder='User' type='text' required='true' />
                    <Password>
                        <Input placeholder='Password' type={passType} value={passInput} onChange={handlePassChange} required='true' />
                        <EyeShow onClick={togglePass}>
                            <img src={eye} alt='icon' />
                        </EyeShow>
                    </Password>
                    <Remember>
                        <Check>
                            <Checkbox id='remember'>Remember Me</Checkbox>
                        </Check>
                        <Forgot link='/'>
                            <Heading7>Forgot password?</Heading7>
                        </Forgot>
                    </Remember>
                    <BtnLogin type='submit'>Login</BtnLogin>
                </LoginForm>

                    <HowDo>
                        <Heading6>How do I sign up?</Heading6>
                        <Body5>After you've made your first purchase, you will recieve an email with your username and password.</Body5>
                    </HowDo>
            </LoginWrap>
        </LoginContainer>
    )
}

export default connect(LoginModal)


const LoginContainer = styled.div`
    display: flex;
    place-content: center;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
`

const LoginWrap = styled.div`
    background: #fff;
    box-shadow: 0px 5px 70px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    padding: 40px;
    text-align: center;
    max-width: 500px;
    height: fit-content;
    margin-top: 10%;
    position: relative;
`

const XBtn = styled.button`
    position: absolute;
    inset: 48px 48px auto auto;
    border: none;
    font-family: inherit;
    background: transparent;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`

const Check = styled.div`
    display: flex;
    column-gap: 10px;

    & input[type="checkbox"] {
        width: 20px;
        height: 20px;
        border: 1px solid #6B7AFF;
        /* border-image: linear-gradient(89.67deg, #5479E6 0.26%, #6B7AFF 99.71%) 1; */
        border-radius: 4px;
        appearance: none;

        &:checked {
            background-color: #6B7AFF;
            color: #fff;
        }
    }

`

const Password = styled.div`
    display: flex;
    position: relative;

    & input {
        width: 100%;
    }
`

const EyeShow = styled.div`
    position: absolute;
    inset: 5px 10px auto auto;
`

const Remember = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`

const Forgot = styled(Link)``

const BtnLogin = styled(BtnPrimary)`
    justify-content: center;
`

const HowDo = styled.div`
    margin-top: 40px;

    & h6 {
        color: var(--text-dark);
    }
`