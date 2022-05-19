import connect from "@frontity/connect"
import { styled } from "frontity"
import Link from "@frontity/components/link";
import footerLogo from './images/logo-footer.png'
import footerBg from './images/footer-bg.png'
// import {FaFacebookF, FaInstagram, FaTumblr, FaTwitter, FaYoutube} from 'react-icons/fa'
import { device } from "./queries"
import { Body5, Heading6 } from "./typography/text"
import twitter from './images/icons/twitter.svg'
import ig from './images/icons/ig.svg'
import tele from './images/icons/tele.svg'
import youtube from './images/icons/youtube.svg'
import t from './images/icons/t.svg'
import mail from './images/icons/email.svg'

const Footer = () => {
    return (
        <>
            <FooterWrap>
                <div className="container">

                    <FooterTop>
                        <FooterLeft>
                            <BrandFooter src={footerLogo} alt='logo' />
                            <Text>League boosting solution from any to every division.</Text>
                            <Socmed>
                                <SocmedLink><img src={twitter} alt='icon' /></SocmedLink>
                                <SocmedLink><img src={tele} alt='icon' /></SocmedLink>
                                <SocmedLink><img src={ig} alt='icon' /></SocmedLink>
                                <SocmedLink><img src={t} alt='icon' /></SocmedLink>
                                <SocmedLink><img src={youtube} alt='icon' /></SocmedLink>
                            </Socmed>

                            <Email link='/'><img src={mail} alt='icon' /> support@eloboostleague.com</Email>
                        </FooterLeft>

                        <FooterRight>
                            <FooterMenu>
                                <Heading6>Information</Heading6>
                                <FooterLinks>
                                    <Link link='/'><Body5>About us</Body5></Link>
                                    <Link link='/'><Body5>About us</Body5></Link>
                                    <Link link='/'><Body5>About us</Body5></Link>
                                    <Link link='/'><Body5>About us</Body5></Link>
                                </FooterLinks>
                            </FooterMenu>
                            <FooterMenu>
                                <Heading6>Information</Heading6>
                                <FooterLinks>
                                    <Link link='/'><Body5>About us</Body5></Link>
                                    <Link link='/'><Body5>About us</Body5></Link>
                                    <Link link='/'><Body5>About us</Body5></Link>
                                    <Link link='/'><Body5>About us</Body5></Link>
                                </FooterLinks>
                            </FooterMenu>
                            <FooterMenu>
                                <Heading6>Information</Heading6>
                                <FooterLinks>
                                    <Link link='/'><Body5>About us</Body5></Link>
                                    <Link link='/'><Body5>About us</Body5></Link>
                                </FooterLinks>
                            </FooterMenu>
                            
                        </FooterRight>
                    </FooterTop>
                </div>
                    <FooterBottom>
                        <div className="container">
                            <FooterBottomWrap>
                                <Copyright>© 2014 - 2021 All Rights Reserved</Copyright>

                                <BtmLinks>
                                    <Link link='/'>Privacy Policy</Link>
                                    <Link link='/'>Terms and Conditions</Link>
                                </BtmLinks>
                            </FooterBottomWrap>
                        </div>
                    </FooterBottom>
            </FooterWrap>
        </>
    )
}

export default connect(Footer)

const FooterWrap = styled.footer`
    background: url(${footerBg}) no-repeat center;
    background-size: cover;
    color: #fff;
    position: relative;
    z-index: 2;

    @media ${device.laptop} {
        margin-top: 100px;
    }
`

const FooterTop = styled.div`
    padding: 5% 0;
    display: flex;
    gap: 40px;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.tablet} {
        flex-direction: row;
    }
`

const FooterLeft = styled.div`
    text-align: center;

    @media ${device.tablet} {
        text-align: left;
    }
`

const BrandFooter = styled.img`
    margin-bottom: 10px;
`

const FooterRight = styled.div`
    display: flex;
    gap: 50px;
`
const FooterMenu = styled.div`

    & > h6 {
        color: #fff;
    }
`
const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;

    & > a {

        span {
            color: #fff !important;
        }
    }

    & > a:nth-child(1) {
        margin-top: 15px;
    }
`

const Email =styled(Link)`
    display: flex;
    align-items: center;
    column-gap: 10px;
`

const Socmed = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
    margin-bottom: 20px;
    border-bottom: 1px solid #E0FFF2;
    padding-bottom: 20px;

    @media ${device.tablet} {
        justify-content: unset;
    }
`
const SocmedLink = styled.div`
    border: 1px solid;
    border-image-source: linear-gradient(146.09deg, rgba(255, 255, 255, 0.6) 8.59%, rgba(255, 255, 255, 0.2) 46.93%, rgba(255, 255, 255, 0.7) 91.34%) 1;
    border-radius: 50px;
    /* padding: 10px; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
`

const FooterBottom = styled.div`
    background: var(--primary-hover);
    padding: 10px 0;
`

const FooterBottomWrap = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;

    @media ${device.laptop} {
        flex-direction: row;
    }
`

const Copyright = styled.p`
    font-size: .85em;
`

const BtmLinks = styled.div`
    display: flex;
    column-gap: 20px;
`
const Text = styled.p`
  font-weight: 500;
`;