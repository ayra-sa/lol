import { connect, styled } from "frontity";
import {
  Body1,
  Heading2,
  Heading4,
  Heading7,
} from "../typography/text";
import { MainTag } from "../typography/main-tag";
import { device } from "../queries";
import ReviewHome from "../home/review-home";
import { Divider } from "../other/divider";
import SidebarNav from "../sidebar-nav";
import { Cards } from "../card";
import { Headline } from "../typography/headline";
import { Dot } from "../typography/dot";
import { SmallContainer } from "../contianer/small-container";
import { DecorTitle } from "../typography/decor-title";
import Progress from "../progress";
import Breadcrumbs from "../breadcrumbs";

const Product = () => {
  return (
    <>
      <SidebarNav />

      <MainRight>

        <div className="container">
          <section className="section">
            <SmallContainer>
              <Breadcrumbs />
              <DecorTitle>
                World of warCraft <Dot>Character Boosting</Dot>
              </DecorTitle>
              <Body1>
                Lol Boosting provides cheap WoW boosting of all types: character
                or PvP boosting, raid or dungeons carry, Powerleveling, farming &
                many more to save your time. Book a slot in our live chat and
                enjoy WoW boost!{" "}
              </Body1>
            </SmallContainer>
          </section>

          <section className="section">
            <MainTag>Rare and limited</MainTag>
            <Heading2>Today’s Special Offers</Heading2>

            <Column3>
              <Cards />
              <Cards />
              <Cards />
            </Column3>
          </section>
          
          <section className="section">
            <MainTag>Get it first</MainTag>
            <Heading2>Limited editions</Heading2>

            <Column3>
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </Column3>
          </section>
          
          <section className="section">
            <MainTag>According to your search</MainTag>
            <Heading2>Special for your account</Heading2>

            <Column3>
              <Cards />
              <Cards />
              <Cards />
            </Column3>
          </section>

          <Divider />

          <SmallContainer>
            <ProductBody>
              <Heading4>Product description</Heading4>
              <DescWrap>
                <Desc>
                  The last boss of every raid in WoW is usually very difficult to
                  defeat even in Normal mode. However, with proper gear and an
                  experienced team, it is more than real. To defeat Sylvanas
                  Windrunner you need to get through 3 phases and bring Sylvanas
                  health down to 50%. At mythic difficulty SoD Sylvanas Windrunner
                  kill will be counted at 45% of her health.
                </Desc>
                <Desc>
                  The first phase is a DPS and brain check for most of the teams.
                  Deal damage, reset stacks with Sylvanas arrows, and simply don’t
                  die. However, most of the random LFG raids stack right there.
                </Desc>
                <Desc>
                  The next stop is phase 2. A lot of running at narrow bridges with
                  holes and a bit of push-back mechanics. The pre-last platform can
                  become a wall for a lot of players. You need a lot of DPS, raid
                  saves, and sprints to reach this platform ASAP.
                </Desc>
              </DescWrap>
            </ProductBody>

            <ProductBody>
              <Heading4>
                are There so many things to do in character boosting?
              </Heading4>
              <DescWrap>

                <Desc>
                  You are only limited by your imagination. And making your wishes
                  come true is our goal in boosting. PvP boost exists from the very
                  beginning of WoW. This aspect of the game can have very cool and
                  unique PvP rewards but most of the time getting them is quite
                  complicated, especially if you are not that much into PvP culture
                  and don't have many skills in this area.
                </Desc>
                <Desc>
                  And here comes the boosting and Overgear. We only work with the
                  very best PvP players and gladiators in WoW. All of them have a
                  huge background in PvP boosting and WoW PvP boosts are part of
                  their life already and there is no one in this world better than
                  them in that case.
                </Desc>
                <Desc>
                  The next stop is phase 2. A lot of running at narrow bridges with
                  holes and a bit of push-back mechanics. The pre-last platform can
                  become a wall for a lot of players. You need a lot of DPS, raid
                  saves, and sprints to reach this platform ASAP.
                </Desc>
              </DescWrap>
            </ProductBody>
          </SmallContainer>
        </div>

        <ReviewHome />
      </MainRight>
    </>
  );
};

export default connect(Product);


const MainRight = styled.div`
  width: 100%;
  /* margin-top: 40px; */

  @media ${device.laptop} {
    width: calc(100% - 375px);
    margin-left: 375px;
  }
  /* padding-left: 20px; */
`

const Column3 = styled.div`
  display: flex;
  overflow: scroll;
  gap: 30px;
  margin-top: 40px;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow: unset;
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    overflow: unset;
  }
`;


const ProductBody = styled.div`
  margin-top: 60px;
`;

const DescWrap = styled.div`
  margin-top: 20px;
`

const Desc = styled(Body1)`
  margin-top: 10px;
  color: #6E7687;
`;
