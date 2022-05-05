import styled from "styled-components";

export const StyledNavbar = styled.div`
  position: relative;
  z-index: 3;
  
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  position: relative;
  z-index: 5;
  width: 50px;
  height: 50px;

  > img {
    width: 100%;
    vertical-align: middle;
  }
`;

export const Menu = styled.nav`
  position: relative;
  z-index: 5;

  display: flex;
  flex-wrap: wrap;

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.secondary};
    transition: .5s;
    border-radius: ${({ theme }) => theme.borderRadius};

    &:hover {
      @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding-left: 1em;
      }

      color: ${({ theme }) => theme.color.white};
      background: ${({ theme }) => theme.color.primary};
    }
  }

  // rwd
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;

    position: fixed;
    padding: ${({ theme }) => theme.padding.header};
    padding-top: 70px;
    background: #fff;

    a {
      padding: 1em 0;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    padding-left: .5em;
    flex-grow: 1;
    
    a {
      padding: .5em;
    }
  }
`;

export const TopMenu = styled(Menu)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: 0;
    width: 100%;
    animation: ${({active}) => active ? 'fadedin' : 'fadedout'} .5s forwards ease;
  }

  // animations
  @keyframes fadedin {
    from {
      top: -100%;
    }
    to {
      top: 0; 
    }
  }
  @keyframes fadedout {
    from {
      top: 0;
    }
    to {
      top: -100%; 
    }
  }
`;

// export const RightMenu = styled(Menu)`
//   @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     top: 0;
//     height: 100%;
//     animation: ${({active}) => active ? 'fadedin' : 'fadedout'} .5s forwards ease;
//   }

//   // animations
//   @keyframes fadedin {
//     from {
//       right: -100%;
//     }
//     to {
//       right: 0;
//     }
//   }
//   @keyframes fadedout {
//     from {
//       right: 0;
//     }
//     to {
//       right: -100%; 
//     }
//   }
// `;


// export const LeftMenu = styled(Menu)`
//   @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     top: 0;
//     height: 100%;
//     animation: ${({active}) => active ? 'fadedin' : 'fadedout'} .5s forwards ease;
//   }

//   // animations
//   @keyframes fadedin {
//     from {
//       left: -100%;
//     }
//     to {
//       left: 0;
//     }
//   }
//   @keyframes fadedout {
//     from {
//       left: 0;
//     }
//     to {
//       left: -100%; 
//     }
//   }
// `;

export const Buger = styled.div`
  position: relative;
  z-index: 15;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

// export const ImgBuger = styled.img`
//   position: relative;
//   z-index: 15;
//   cursor: pointer;

//   @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
//     display: none;
//   }
// `;

export const SpanBuger = styled(Buger)`
  width: 2em;

  span {
    display: block;
    background: ${({ theme }) => theme.color.secondary};
    height: 2px;
    width: 100%;
    margin: 6px 0;
    transition: .5s;
    /* transition-delay: .5s; */

    ${({ active }) => active && 'opacity: 0;'}
  }

  &:before {
    content: '';
    display: block;
    background: ${({ theme }) => theme.color.secondary};
    height: 2px;
    width: 100%;
    transition: .5s;

    ${({ active }) => active && 'transform: translateY(8px) rotate(-135deg);'}
  }
  
  &:after {
    content: '';
    display: block;
    background: ${({ theme }) => theme.color.secondary};
    height: 2px;
    width: 100%;
    transition: .5s;

    ${({ active }) => active && 'transform: translateY(-8px) rotate(135deg);'}
  }
`;