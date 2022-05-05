import styled from "styled-components";

export const StyledMain = styled.main`
`;

export const Banner = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  > * {
    flex: 1;
    padding: 20px 50px 50px;

    p {
      font-size: 1.5rem;
      line-height: 2.25;
      font-weight: 700;
    }
  }
`;

export const DownloadIcon = styled.div`
  img {
    width: 135px;
    height: 40px;
    object-fit: contain;

    &:first-child {
      padding-right: 0.75rem;
    }
  }
`;

export const CommunicationQuality = styled.section`
  padding: 50px 0;

  ul {
    li {
      padding: 40px 28px;

      img {
        width: 110px;
        object-fit: contain;
        margin-right: 30px;
      }

      > div {
        flex-grow: 1;

        p {
          line-height: 1.625;
          color: ${({ theme }) => theme.color.gray};
        }
      }
    }
  }
`;

export const NewsGroup = styled.section`
  padding: 50px 0;
`;

export const SupportUsers = styled.div`
  h2 {
    text-align: left;
    padding-left: 36px;
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const TrustworthyAssistant = styled.section`
  margin: 20px auto;
  padding: 20px 30px;
  text-align: center;

  h2 {
    padding: 10px 50px;
  }

  img {
    width: 50px;
    height: 40px;
    object-fit: contain;
  }
`;

export const Quantity = styled.span`
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 1.25;
  color: ${({ theme }) => theme.color.primary};
`;