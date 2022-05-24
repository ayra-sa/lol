import React from "react";
import Nav from "./nav";
import Switch from "@frontity/components/switch";
import Home from "./home";
import { connect, css, Global, Head, styled } from "frontity";
import { device } from "./queries";
import Title from "./title";
import Loading from "./loading";
import Product from "./product/product";
import NavLogin from "./nav-login";
import Faq from "./faq";
import Footer from "./footer";
import Order from "./order";
import Blog from "./blog";
import BlogDetail from "./blog/blog-detail";
import About from "./about";
import ProductSlider from "./product/product-slider";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      <Global styles={globalStyles} />

      {data.isArchive ? <Nav /> : <NavLogin />}

      <Switch>
        <Loading when={data.isFetching} />
        <Home when={data.isArchive} />
        <About when={data.isAbout} />
        <Product when={data.isProduct} />
        <Blog when={data.isBlog} />
        <BlogDetail when={data.isBlogDetail} />
        <Faq when={data.isFAQ} />
        <Order when={data.isOrder} />
        <ProductSlider when={data.isSlider} />
      </Switch>

      <Footer />
    </>
  );
};

export default connect(Root);

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800&display=swap");

  :root {
    --primary-default: linear-gradient(89.67deg, #5479e6 0.26%, #6b7aff 99.71%);
    --primary-hover: linear-gradient(89.67deg, #3d3ae8 0.26%, #664ff1 99.71%);
    --primary-pressed: #3a67e8;
    --secondary-hover: #e0fff2;
    --tag: #e5fff6;
    --color-tag: #579f70;
    --hot: #ec6daf;
    --most: #6a49ee;
    --special: #ffa03e;
    --card: #ebeff8;
    --text-dark: #3a445c,
    --text-medium: #6e7687;
    --font: "Urbanist", sans-serif;
    --border-gradient: radial-gradient(
          circle at 100% 100%,
          #ffffff 0,
          #ffffff 13px,
          transparent 13px
        )
        0% 0%/14px 14px no-repeat,
      radial-gradient(
          circle at 0 100%,
          #ffffff 0,
          #ffffff 13px,
          transparent 13px
        )
        100% 0%/14px 14px no-repeat,
      radial-gradient(
          circle at 100% 0,
          #ffffff 0,
          #ffffff 13px,
          transparent 13px
        )
        0% 100%/14px 14px no-repeat,
      radial-gradient(circle at 0 0, #ffffff 0, #ffffff 13px, transparent 13px)
        100% 100%/14px 14px no-repeat,
      linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 2px)
        calc(100% - 28px) no-repeat,
      linear-gradient(#ffffff, #ffffff) 50% 50% / calc(100% - 28px)
        calc(100% - 2px) no-repeat,
      linear-gradient(53deg, #dd7bff 0%, #4d89ff 100%);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  body {
    margin: 0;
    font-family: var(--font);
    font-size: 1em;
    line-height: 27px;
    color: #3a445c;
  }
  main {
    overflow: hidden;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  img {
    max-width: 100%;
  }
  input, textarea {
    font-family: inherit;
  }
  .section {
    margin-top: 100px;
  }
  .container {
    /* width: 80%; */
    padding: 0 20px;
    margin: 0 auto;
    max-width: 100%;

    @media ${device.mobileL} {
      max-width: 425px;
    }

    @media ${device.tablet} {
      max-width: 768px;
    }
    @media ${device.laptop} {
      max-width: 1024px;
    }
    @media ${device.laptopL} {
      max-width: 1280px;
    }
    @media ${device.desktop} {
      max-width: 1536px;
    }
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
