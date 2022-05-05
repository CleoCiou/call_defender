import styled from "styled-components";

// ===============================
// <Container full>
// -------------------------------
// + props
//   full - no padding
// ===============================
export const Container = styled.div`
  max-width: 100%;
  width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  // padding
  ${({ full, theme }) => !full && `padding: ${theme.padding.container};`}

  & > * {
    width: 100%;
  }
`;

// ===============================
// <Flex>
// ===============================
export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  & > * {
    flex: 1;
  }
`;

// ==============================================================
// <FlexContainer
//  full
//  col: {{m: Int, t: Int, d: Int}}
//  justifyContent=<String>
//  alignItems=<String>
// >
// --------------------------------------------------------------
// * inherited from <Container>
// --------------------------------------------------------------
// + props:
//   full - no padding
//   col - d: how many cols for all
//         t: how many cols for tablet 
//         m: how many cols for mobile
//   justifyContent - flex justify content
//   alignItems - flex align items
// ==============================================================
export const FlexContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start;'};
  align-items: ${({ alignItems }) => alignItems || 'center;'};
  
  & > * {
    ${({ col, theme }) => {
      const { d, t, m } = { ...col };
      const width = `
        ${ // all
          (d && `width: ${100 / parseInt(d)}%;`) || ''
        }

        ${ // tablet
          (t && 
          `@media screen and (max-width: ${theme.breakpoints.tablet}) {
            width: ${100 / parseInt(t)}%;
          } `) || ''
        }

        ${ // mobile
          (m && 
          `@media screen and (max-width: ${theme.breakpoints.mobile}) {
            width: ${100 / parseInt(m)}%;
          } `) ||  ''
        }
      `;
      return (col && width) || `flex: 1;`;
    }}

    & > * {
      width: 100%;
    }
  }
`;