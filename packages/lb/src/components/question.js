import { connect, styled } from "frontity";
import React from "react";
// import { FaMinus, FaPlus } from "react-icons/fa";
import { Body3, Heading3 } from "./typography/text";
import plus from './images/icons/plus.svg'
import minus from './images/icons/minus.svg'

const QuestComp = () => {

    const [open, setOpen] = React.useState(false)

  return (
    <>
      <FAQBox>
        <FAQTop onClick={() => setOpen(!open)}>
          <Question>How popular is LoL Boosting?</Question>
          {!open ? <FIcon src={plus} alt='icon' /> : <FIcon src={minus} alt='icon' />}
        </FAQTop>
        {open && 
        <Answer>
          LoL Boosting is an essential part of the solo queue gaming experience
          due to it’s ability to create a positive mindset by playing stress
          free for a very low cost. Nobody wants to be miserable and spend weeks
          grinding their previously owned rank back from a bad loss streak, just
          to save a few bucks.
        </Answer>}
        
      </FAQBox>
    </>
  );
};

export default connect(QuestComp)


const FAQBox = styled.div`
    text-align: left;
    background: 
      radial-gradient(circle at 100% 100%, #ffffff 0, #ffffff 13px, transparent 13px) 0% 0%/14px 14px no-repeat,
      radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 13px, transparent 13px) 100% 0%/14px 14px no-repeat, 
      radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 13px, transparent 13px) 0% 100%/14px 14px no-repeat, 
      radial-gradient(circle at 0 0, #ffffff 0, #ffffff 13px, transparent 13px) 100% 100%/14px 14px no-repeat,
      linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 2px) calc(100% - 28px) no-repeat, 
      linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 28px) calc(100% - 2px) no-repeat, 
      linear-gradient(53deg, #dd7bff 0%, #4D89FF 100%);
    border-radius: 14px;
    /* padding: 5px; */
    box-sizing: content-box;
    padding: 20px 30px;
    margin-top: 20px;
`

const FAQTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > h3 {
        margin: 0;
    }
`

const Question = styled(Heading3)``

const Answer = styled(Body3)`
    display: block;
    margin-top: 20px;
`

// const Plus = styled(FaPlus)`
//   /* background: linear-gradient(89.67deg, #5479E6 0.26%, #6B7AFF 99.71%);
//   -webkit-text-fill-color: transparent;
//   background-clip: text; */
//   color: rgba(84, 121, 229, 1);
// `

const FIcon = styled.img``