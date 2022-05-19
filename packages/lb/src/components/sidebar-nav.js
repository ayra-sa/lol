import { connect, styled } from "frontity";
import React from "react";
import { device } from "./queries";
import { Body2, Body3, Heading4 } from "./typography/text";
import Link from "@frontity/components/link";
import bgGame from "./images/game-select.png";
import arrow from "./images/icons/arrow-down.svg";


const SidebarNav = () => {
  return (
    <Sidebar>
      <GameSelection>
        <GameLeft>
          <Heading4>World Of Warcraft</Heading4>
          <Body3>Blizzard Entertainment</Body3>
        </GameLeft>

        <DropDown>
          <img src={arrow} alt='icon' />
        </DropDown>
      </GameSelection>

      <Categories>
        <CategoryList><Body2>Categories</Body2></CategoryList>
        <CategoryList>
          <LinkList link='/slider'><Heading4>WOW Gold</Heading4></LinkList>
        </CategoryList>
        <CategoryList>
          <LinkList link='/slider'><Heading4>Leveling</Heading4></LinkList>
        </CategoryList>
        <CategoryList>
          <LinkList link='/slider'><Heading4>Character Boosting</Heading4></LinkList>
        </CategoryList>
        <CategoryList>
          <LinkList link='/slider'><Heading4>Raios</Heading4></LinkList>
        </CategoryList>
        <CategoryList>
          <LinkList link='/slider'><Heading4>Items</Heading4></LinkList>
        </CategoryList>
        <CategoryList>
          <LinkList link='/slider'><Heading4>Achievements</Heading4></LinkList>
        </CategoryList>
        
      </Categories>
    </Sidebar>
  );
};

export default connect(SidebarNav)


const Sidebar = styled.div`
  width: 100%;
  display: inline-block;
  background: #ebeff8;
  margin-top: 5%;
  
  @media ${device.laptop} {
    width: 375px;
    position: fixed;
    inset: 0 auto 0 0;
    margin-top: 2%;
  }
`;


const GameSelection = styled.div`
  background: url(${bgGame}) center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  margin-top: 60px;
  padding: 20px 32px;

  @media ${device.laptop} {
    padding: 20px 60px;
  }
`;

const GameLeft = styled.div`
  color: #fff;

  & span {
    color: #fff !important;
  }
`;

const DropDown = styled.div``

const Categories = styled.ul`
  display: flex;
  column-gap: 10px;
  overflow-x: scroll;
  
  @media ${device.laptop} {
    display: block;
    padding: 20px 50px;
    /* text-align: center; */
  }
`;


const CategoryList = styled.li`
  list-style: none;
  padding: 15px 20px;
  border-radius: 12px;
  `;

const LinkList = styled(Link)`
  background: transparent;
  /* display: flex; */
  
  & h4 {
    color: #5679e7;
    margin-bottom: 0;
  }
`;