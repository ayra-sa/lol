import { connect, styled } from "frontity";
import React from 'react'
import Logo from './images/logo.svg'
import Link from "@frontity/components/link";
import { BtnPrimary } from "./buttons/button-primary";
import { device } from "./queries";
import LoginModal from "./login-modal";
import search from './images/icons/search.svg'

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Navbar = ({ state }) => {

  const [modalOpen, setModalOpen] = React.useState(false)

  return (
  <NavContainer>
    <div className="container">
      <NavWrap>
        <NavLeft>
          {/* <MenuIcon /> */}
          <Brand link='/'>
            <img src={Logo} alt="logo" />
          </Brand>
          <SearchBar>
            <Input placeholder="Search for boosting" />
            <SearchIcon src={search} alt='icon' />
          </SearchBar>
          <NavMenu>

            {state.theme.menu.map(([name, link]) => {
              return (
                <NavItem>
                  <Link link={link}>{name}</Link>
                </NavItem>
              )
            })}
          </NavMenu>
        </NavLeft>

        <BtnNavbar>
          <BtnPrimary onClick={() => setModalOpen(!modalOpen)} >Log In</BtnPrimary>
        </BtnNavbar>
      </NavWrap>


      {modalOpen && <LoginModal close={setModalOpen} />}
    </div>
  </NavContainer>
  )
}

export default connect(Navbar);

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

// const MenuIcon = styled(GiHamburgerMenu)`
//   color: var(--primary-pressed);

//   @media ${device.laptop} {
//     display: none;
//   }
// `

const NavWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-width: 85vw;
  
  @media ${device.laptop} {
    width: 100%;
    justify-content: space-between;

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

const Input = styled.input`
  background: transparent;
  border: none;

  &::placeholder {
    font-family: var(--font);
  }

  &:focus {
    border: none;
    outline: none;
  }
`

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
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    color: #3A445C;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
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
  margin-left: auto;
  display: inline-block;
`