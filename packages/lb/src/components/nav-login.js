import { connect, styled } from "frontity";
import React from 'react'
import Link from "@frontity/components/link";
import Logo from './images/logo.svg'
// import { BiSearch } from 'react-icons/bi'
import { BtnPrimary } from "./buttons/button-primary";
import { device } from "./queries";
import user from './images/user.png'
import Checkout from "./checkout";
import search from './images/icons/search.svg'
import mobileMenu from './images/icons/hamburger-menu.svg'
import order from './images/icons/order.svg'


/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => {


  const [openCheckout, setOpenCheckout] = React.useState(false)

  return (
  <NavContainer>
    <div className="container">
      <NavWrap>
        <NavLeft>
          <MenuIcon src={mobileMenu} alt='icon' />
          <Brand link='/'>
            <img src={Logo} alt="logo" />
          </Brand>
          <SearchBar>
            {/* <Input placeholder="Search for boosting" /> */}
            <SearchIcon src={search} alt='icon' />
          </SearchBar>
        </NavLeft>
          <NavMenu>
            {state.theme.menu.map(([name, link]) => {
                const isCurrentPage = state.router.link === link
                console.log(isCurrentPage, link)
              return (
                <NavItem>
                  <Link key={name} link={link} aria-current={isCurrentPage ? "page" : undefined}>{name}</Link>
                </NavItem>
              )
            })}
          </NavMenu>

        <BtnNavbar>
          <BtnOrder link='/order'>
            <BtnPrimary>My Order</BtnPrimary>
          </BtnOrder>
          <Profile onClick={() => setOpenCheckout(!openCheckout)}>
            <img src={user} alt='user' />
          </Profile>
          <OrderIcon>
            <img src={order} alt='icon' />
          </OrderIcon>

          {openCheckout && <Checkout close={setOpenCheckout} />}
        </BtnNavbar>
      </NavWrap>
    </div>
  </NavContainer>
  )
}
  

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  inset: 0 0 auto 0;
  padding: 10px 0;
  background: #fff;
  box-shadow: 0px 3px 40px rgba(0, 0, 0, 0.05);
  margin: 0;
  z-index: 999;
  overflow-x: auto;

`;

const MenuIcon = styled.img`
  cursor: pointer;
  @media ${device.laptop} {
    display: none;
  }
`

const NavWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-width: 85vw;
  justify-content: space-between;
  
  @media ${device.laptop} {
    width: 100%;
  }
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;

  @media ${device.laptop} {
    column-gap: 90px;
  }
`;

const Brand = styled(Link)``

const SearchBar = styled.div`
  background-color: #EBEFF8;
  padding: 14px;
  border-radius: 8px;
  align-items: center;
  display: none;
  
  @media ${device.laptop} {
    display: flex;
  }
`

const SearchIcon = styled.img``


const NavMenu = styled.div`
  /* display: none; */
  position: absolute;
  left: -100%;

  @media ${device.laptop} {
    display: flex;
    position: relative;
    left: auto;
  }
`

const NavItem = styled.div`
  padding: 0 17px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  position: relative;

  & > a {
    display: inline-flex;
    justify-content: center;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    color: #3A445C;
    font-weight: 500;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      font-weight: 700;
      &::before {
        content: '';
        position: absolute;
        top: -100%;
        background: linear-gradient(89.67deg, #5479E6 0.26%, #6B7AFF 99.71%);
        border-radius: 0px 0px 4px 4px;
        height: 4px;
        width: 100%;
      }
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;

const BtnNavbar = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 60px;
`

const BtnOrder = styled(Link)`
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`

const Profile = styled.button`
  display: none;

  @media ${device.laptop} {
    background: transparent;
    border: none;
    display: block;
  }
`

const OrderIcon = styled.div`
  display: block;

  @media ${device.laptop} {
    display: none;
  }
`