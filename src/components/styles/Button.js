import styled from "styled-components";
import { up, down } from "./_Mixin";

export const Button = styled.button`
  width: 144px;
  height: 46px;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .5s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
  }
`;

export const CampaignButton = styled.button`
  cursor: pointer;
  background: linear-gradient(180deg, #F9D423 -69.85%, #FF4E50 233.82%);
  box-shadow: 0px 0px 5px 1px rgba(154, 154, 154, 0.25);
  border: none;
  border-radius: 100px;
  color: #fff;
  font-style: normal;
  font-weight: 600;

  ${down('xl')`
    padding: 5px 1.2em;
    font-size: 18px;
    line-height: 28px;
  `}

  ${up('xl')`
    padding: 16px 1.2em;
    font-size: 27px;
    line-height: 21px;
  `}
`;