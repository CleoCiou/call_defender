import styled from "styled-components";

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primary};
  height: 80px;
  padding: ${({ theme }) => theme.padding.header};
`;