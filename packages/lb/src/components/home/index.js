import { connect, styled } from "frontity";
// import { BtnPrimary } from "./buttons/button-primary";
import bgMain from "../images/bg-main.png";
import BlogHome from "./blog-home";
import ReviewHome from "./review-home";
import WorkHome from "./work";
import ProductHome from "./product-home";
import ProductCards from "./product-card";
import WhatIs from "./what-is";
import HeroHome from "./hero";
import Filter from "./filter";

const Home = () => {
  return (
    <main>
      <BgGradient>
        <div className="container">
          
          <HeroHome />
          
          <Filter />

          <ProductHome />

          <ProductCards />

          <WhatIs />

        </div>
      </BgGradient>

      <ReviewHome />
      
      <BlogHome />

      <WorkHome />

    </main>
  );
};

export default connect(Home);

const BgGradient = styled.div`
  background: url(${bgMain}) no-repeat center;
  background-size: cover;
`;