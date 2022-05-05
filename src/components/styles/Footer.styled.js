import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.padding.footer};
  max-height: 265px;

  h5 {
    margin-bottom: 16px;
  }

  a {
    color: ${({ theme }) => theme.color.lightBlue};
    font-size: 1rem;
    line-height: 1.4375;
  }

  img {
    width: 30px;
    margin-right: 24px;
  }
`;

export const Copyright = styled.p`
  border-left: 1px solid ${({ theme }) => theme.color.lightBlue};
  padding-left: 90px;

  img {
    display: block;
    margin-bottom: 20px;
    width: 174px;
  }

  > span {
    color: ${({ theme }) => theme.color.lightBlue};
  }
`;