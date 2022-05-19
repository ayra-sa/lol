import { connect, styled } from 'frontity'
import React from 'react'
import { Body4 } from './typography/text'
import arrow from './images/icons/arrow.svg'
import Link from '@frontity/components/link'


const Breadcrumbs = () => {
    return (
        <>
            <Bread>
                <Link><Menu>Home</Menu></Link>
                <img src={arrow} alt='icon' />
                <Link><Menu>World of Warcraft</Menu></Link>
                <img src={arrow} alt='icon' />
                {/* <MenuNow>Character</MenuNow> */}
            </Bread>
        </>
    )
}

export default connect(Breadcrumbs)


const Bread = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin: 20px 0 40px 0;
`

const Menu = styled(Body4)`
    color: var(--primary-pressed);
`