import { styled } from "frontity";
import { ButtonSecond } from "./button";

export const BtnSecondary = styled(ButtonSecond)`
  /* background: radial-gradient(
        circle at 100% 100%,
        #eef2f9 0,
        #eef2f9 9px,
        transparent 9px
      )
      0% 0%/10px 10px no-repeat,
    radial-gradient(circle at 0 100%, #eef2f9 0, #eef2f9 9px, transparent 9px)
      100% 0%/10px 10px no-repeat,
    radial-gradient(circle at 100% 0, #eef2f9 0, #eef2f9 9px, transparent 9px)
      0% 100%/10px 10px no-repeat,
    radial-gradient(circle at 0 0, #eef2f9 0, #eef2f9 9px, transparent 9px) 100%
      100%/10px 10px no-repeat,
    linear-gradient(#eef2f9, #eef2f9) 50% 50% / calc(100% - 2px)
      calc(100% - 20px) no-repeat,
    linear-gradient(#eef2f9, #eef2f9) 50% 50% / calc(100% - 20px)
      calc(100% - 2px) no-repeat,
    linear-gradient(90deg, #5479e5 0%, #6b7aff 100%); */
  border-radius: 10px;
  /* padding: 1px; */
  box-sizing: content-box;
  color: #5479e5;
  border: 1px solid #5479e5;
  background: transparent;

  &:hover {
    background: var(--secondary-hover);
  }
`;
