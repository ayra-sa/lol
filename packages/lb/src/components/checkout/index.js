import { connect, styled } from 'frontity'
import React from 'react'
import { Checkbox, Input } from '../form/input'
import { Heading2, Heading3, Heading4, Heading7 } from '../typography/text'
import stripe from '../images/payment/visa-4.svg'
import stripe1 from '../images/payment/maestrocard.svg'
import stripe2 from '../images/payment/american-express-1.svg'
import stripe3 from '../images/payment/mastercard-6.svg'
import skrill from '../images/payment/paysafe-card.svg'
import skrill2 from '../images/payment/klarna-logo-black.svg'
import order from '../images/order/item.png'
import { BtnPrimary } from '../buttons/button-primary'
import x from '../images/icons/x.svg'
import { BtnSecondary } from '../buttons/button-secondary'

const Checkout = ({ close }) => {
    return (
        <CheckoutWrap>
            <CheckoutBox>
                <Heading2>Checkout</Heading2>

                <XBtn onClick={() => close(false)}><img src={x} alt='icon' /></XBtn>

                <CheckoutContent>
                    <Left>
                        <Personal>
                            <Title>Personal information</Title>
                            <Input placeholder='Username' type='text' />
                            <Input placeholder='Password' type='password' />
                            <Input placeholder='Summone name' type='text' />
                            <Input placeholder='Location' type='text' />
                            <Input placeholder='Email' type='email' />
                        </Personal>

                        <Payment>
                            <Title>Payment Method</Title>
                            <Method>
                                <MethodImg>
                                    <img src={stripe} alt='payment' />
                                    <img src={stripe1} alt='payment' />
                                    <img src={stripe2} alt='payment' />
                                    <img src={stripe3} alt='payment' />
                                    <img src={stripe} alt='payment' />
                                    <img src={stripe1} alt='payment' />
                                    <img src={stripe2} alt='payment' />
                                </MethodImg>
                                <Heading7>Powered by Stripe</Heading7>
                            </Method>
                            <Method>
                                <MethodImg>
                                    <img src={skrill} alt='payment' />
                                    <img src={skrill2} alt='payment' />
                                </MethodImg>
                                <Heading7>Powered by Skrill</Heading7>
                            </Method>
                            <Checks>
                                <Check><Checkbox id='check'>Pay with FoxCoins</Checkbox></Check>
                                <Check><Checkbox id='agree'>By clicking "Purchase" I agree with the Terms & Conditions</Checkbox></Check>
                            </Checks>
                        </Payment>
                    </Left>

                    <Right>
                        <OrderSum>
                            <Title>Order Summary</Title>

                            <Items>
                                <ItemBox>
                                    <Heading4>Initial</Heading4>
                                    <img src={order} alt='order' />
                                    <Heading3>Silver 3</Heading3>
                                </ItemBox>

                                <ItemBox>
                                    <Heading4>Initial</Heading4>
                                    <img src={order} alt='order' />
                                    <Heading3>Silver 3</Heading3>
                                </ItemBox>
                            </Items>

                            <Table>
                                <Tr>
                                    <Td><Heading4>Server</Heading4></Td>
                                    <TdResult><Heading4>Europe West</Heading4></TdResult>
                                </Tr>
                                <Tr>
                                    <Td><Heading4>Completion Time</Heading4></Td>
                                    <TdResult><Heading4>1 Day</Heading4></TdResult>
                                </Tr>
                                <Tr>
                                    <Td><Heading4>Extra Options</Heading4></Td>
                                    <TdResult><Heading4>None</Heading4></TdResult>
                                </Tr>
                                <Tr>
                                    <Td><Heading4>You Earn</Heading4></Td>
                                    <TdResult><Heading4>0 Fox Coins</Heading4></TdResult>
                                </Tr>
                            </Table>

                            <Coupon>
                                <Input placeholder='Enter coupon' type='text' />
                                <BtnSecondary>Apply</BtnSecondary>
                            </Coupon>
                        </OrderSum>
                    </Right>
                </CheckoutContent>
                    <BtnPrimary>Purchase</BtnPrimary>
            </CheckoutBox>
        </CheckoutWrap>
    )
}

export default connect(Checkout)


const CheckoutWrap = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(14px);
    display: flex;
    place-content: center;
`

const CheckoutBox = styled.div`
    background: #fff;
    box-shadow: 0px 5px 70px 0px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    text-align: center;
    padding: 30px 85px;
    max-width: 70%;
    height: fit-content;
    margin-top: 20px;
    position: relative;
`

const XBtn = styled.button`
    position: absolute;
    inset: 48px 70px auto auto;
    border: none;
    background: transparent;
    font-size: 1.2em;
`

const CheckoutContent = styled.div`
    display: flex;
    gap: 70px;
    margin-top: 20px;
`

const Left = styled.div`
    text-align: left;
`

const Right = styled(Left)``

const Personal = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled(Heading3)`
    margin-bottom: 10px;
`

const Payment = styled.div``

const Method = styled.div`
    border: 2px solid rgba(208, 213, 223, 1);
    border-radius: 6px;
    padding: 10px;
    margin-bottom: 10px;
`

const MethodImg = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
`

const OrderSum = styled.div``

const Items = styled.div`
    display: flex;
    gap: 40px;
`

const ItemBox = styled.div`
    background: var(--border-gradient);
    border-radius: 14px;
    padding: 15px 50px;
    text-align: center;

    & img {
        margin: 25px 0 20px 0;
    }
`

const Table = styled.table`
    margin-top: 20px;
    width: 100%;
`

const Tr = styled.tr`
    margin-bottom: 10px;
`

const Td = styled.td`
    width: 35%;
`

const TdResult = styled.td`
    color: var(--primary-pressed);
`

const Coupon = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 20px;

    & input {
        margin-bottom: 0;
        width: 100%;
    }
`

const Checks = styled.div`
    margin: 20px 0;
`

const Check = styled.div`
    display: flex;
    column-gap: 10px;
    align-items: center;

`