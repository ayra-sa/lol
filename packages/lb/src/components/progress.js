import { connect, styled } from 'frontity'
import React from 'react'
import { Heading3, Heading5 } from './typography/text'
import prog from './images/progress.png'

const Progress = () => {
    return (
        <ProgressBar>
            <ProgressBack>
                <ProgressFront />
            </ProgressBack>

            <PInfo>
                <div>
                    <Heading5>Order ID</Heading5>
                    <PDetail>21321</PDetail>
                </div>
                <div>
                    <Heading5>Order ID</Heading5>
                    <PDetail>21321</PDetail>
                </div>
                <div>
                    <Heading5>Order ID</Heading5>
                    <PDetail>21321</PDetail>
                </div>
            </PInfo>
        </ProgressBar>
    )
}

export default connect(Progress)


const ProgressBar = styled.div`
    margin: 60px auto 20px auto;
    /* display: inline-block; */
    width: 780px;
`

const ProgressBack = styled.div`
    background: url(${prog}) no-repeat center;
    height: 12px;
    border-radius: 10px;
`

const ProgressFront = styled.div`
    background: linear-gradient(53.42deg, #DD7BFF 3.84%, #4D89FF 96.16%);
    border-radius: 10px;
    width: 30%;
    height: 100%;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: -5px;
        width: 20px;
        height: 20px;
        background: linear-gradient(53.42deg, #DD7BFF 3.84%, #4D89FF 96.16%);
        border-radius: 50px;
    }
    
`

const PInfo = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: space-evenly;
`

const PDetail = styled(Heading3)`
    color: #6B7AFF;
`