import styled from "styled-components";

export const Card = styled.div`
  padding: 36px;

  > div {
    background: ${({ theme }) => theme.color.white};
    border-radius: ${({ theme }) => theme.borderRadius};
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.cardShadow};
  }
`;

// news
export const News = styled.div`
  max-height: 387px;

  > *:not(img) {
    padding: 0 48px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.0625;
  color: ${({ theme }) => theme.color.pGray};
`;

export const Time = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.timeGray};
  margin: 2rem 0 1.5rem;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.0625;
`;

// Support Users
export const Feedback = styled.div`
  min-height: 200px;
  padding: 20px 36px;
  border-left: 10px solid ${({ theme }) => theme.color.lightBlue};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const Comment = styled.p`
  flex-grow: 1;
  font-family: 'Poppins';
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.secondary};
`;

export const Star = styled.img`
  height: 24px;
  text-align: right;
`;

export const User = styled.span`
  font-family: 'Poppins';
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.pGray};
`;