import styled, { keyframes } from "styled-components";
import { flex, up, down } from './_Mixin';

export const StyledCampaign = styled.main`
  position: relative;
  background: #2FE8F3;
  overflow: hidden;
`;

export const Blur = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 190vh;
  opacity: .7;

  ${down('xl')`
    background: linear-gradient(174deg,#F2F7FF 38%,transparent 38%,transparent 100%);
  `}
  
  ${up('xl')`
    background: linear-gradient(174deg, #F2F7FF 64%, transparent 64%, transparent 100%);
  `}
`;

export const Circles = styled.div`
  ${up('xl')`
    &:before {
      position: absolute;
      z-index: 1;
      content: '';
      display: block;
      width: 47vh;
      height: 47vh;
      top: 18vh;
      left: 16vw;
      background: #69ED3A;
      opacity: .5;
      filter: blur(100px);
      border-radius: 50%;
    }
    
    &:after {
      position: absolute;
      z-index: 1;
      content: '';
      display: block;
      width: 19vh;
      height: 19vh;
      top: 53vh;
      left: 53vw;
      background: #1DB5BE;
      opacity: 0.5;
      filter: blur(100px);
      border-radius: 50%;
    }
  `}
`;

export const Title = styled.section`
  position: relative;
  z-index: 2;
  padding-top: 50px;
  text-align: center;

  h1 {
    font-style: normal;
    font-weight: 700;
    color: #267AF8;
  }

  div {
    img {
      width: 100%;
    }
  }

  ${down('xl')`
    div {
      padding: 12px 3rem 20px;
    }

    h1 {
      font-size: 18px;
      line-height: 28px;
    }
  `}

  ${up('xl')`
    min-height: 100vh;
    padding-top: 141.75px;

    h1 {
      font-size: 30px;
      line-height: 21px;
      margin-bottom: 40px;
    }

    div {
      width: 45vw;
      margin: 0 auto 2.5em;
    }
  `}
`;

// keyframes for mascots
export const LeftFadIn = keyframes`
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    left: 0;
  }
`;

export const RightFadIn = keyframes`
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    right: 0;
  }
`;

export const Mascots = styled.section`
  position: relative;
  z-index: 2;
  width: 100%;

  ${down('xl')`
    position: relative;
  `}

  ${up('xl')`
    position: absolute;
    top: 100vh;
  `}
`;

// animation
export const LeftMascots = styled.div`
  position: absolute;
  top: -2em;
  left: -80%;
  animation: ${LeftFadIn} 1.5s ease-in-out forwards;

  img {
    width: 100%;
  }

  &:after {
    position: absolute;
    left: 0;
    content: '';
    display: block;
    background: url('./images/left_mascot_line.svg') no-repeat;
    background-size: contain;
    width: 42vw;
  }

  ${down('xl')`
    width: 35vw;

    &:after {
      transform: scaleY(1.2);
      bottom: -1.6em;
      height: 82px;
    }
  `}
  
  ${up('xl')`
    transform: translateY(-95%);
    width: 20vw;

    &:after {
      bottom: -3.6em;
      height: 30vh;
    }
  `}
`;

export const RightMascots = styled.div`
  position: absolute;
  top: 0;
  right: -80%;
  animation: ${RightFadIn} 1.5s ease-in-out forwards;

  img {
    width: 100%;
  }

  &:after {
    position: absolute;
    right: 0;
    content: '';
    display: block;
    background: url('./images/right_mascot_line.svg') no-repeat right;
    background-size: contain;
  }
  
  ${down('xl')`
    width: 35vw;

    &:after {
      height: 82px;
      width: 67vw;
      bottom: -2.4em;
      transform: scaleY(1.1);
    }
  `}
  
  ${up('xl')`
    transform: translateY(-135%);
    width: 20vw;
    
    &:after {
      bottom: -5.8em;
      height: 33vh;
      width: 67vw;
    }
  `}
`;

export const Event= styled.section`
  position: relative;
  z-index: 2;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 30px 5px rgba(184, 184, 184, 0.45);
  
  button {
    display: block;
    margin: 40px auto 16px;
  }
  
  &:before {
    position: absolute;
    content: '';
    display: block;
    background: url('./images/megaphone1.svg') no-repeat right;
    background-size: contain;

    ${down('xl')`
      top: -7vh;
      right: 2vw;
      width: 25vw;
      height: 15vh;
    `}
    ${up('xl')`
      top: -14vh;
      right: 6vw;
      width: 25vw;
      height: 28vh;
    `}
  }

  &:after {
    position: absolute;
    content: '';
    display: block;
    background: url('./images/event-left_line.svg') no-repeat left;
    background-size: contain;
    width: 50vw;
  }
  
  ${down('xl')`
    padding: 24px 16px;
    margin: 32vh 2rem 0;
    border-radius: 20px 20px 0px 0px;

    &:after {
      left: -8em;
      bottom: -0.5em;
      height: 82px;
      transform: scaleY(1.2);
    }
  `}

  ${up('xl')`
    padding: 5.5em 10%;
    margin: 5% 12.5% 0;
    border-radius: 50px 50px 0px 0px;
    
    &:after {
      left: -14vw;
      bottom: 0;
      height: 22vh;
    }
  `}
`;

export const EventTitle = styled.h3`
  margin-bottom: 12px;
  font-style: normal;
  font-weight: 700;
  color: #173551;

  ${down('xl')`
    text-align: center;
    font-size: 18px;
    line-height: 28px;
  `}

  ${up('xl')`
    font-size:28px;
    line-height: 22px;
  `}
`;

export const EventParagraph = styled.p`
  position: relative;
  margin-bottom: 1em;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #173551;
`;

export const EventIntroduction = styled.div`
  position: relative;

  &:before {
    position: absolute;
    content: '';
    display: block;
    background: url('./images/megaphone2.svg') no-repeat;
    background-size: contain;
    
    ${down('xl')`
      top: -9vh;
      left: -2vw;
      width: 20vw;
      height: 15vh;
    `}
    ${up('xl')`
      top: -26vh;
      left: 2vw;
      width: 20vw;
      height: 20vh;
    `}
  }

  ${up('xl')`
    &:after {
      position: absolute;
      content: '';
      display: block;
      background: url('./images/event-right_line.svg') no-repeat right;
      background-size: contain;
      bottom: -30%;
      right: -24vw;
      width: 35vw;
      height: 28vh;
    }
  `}
`;

export const EventRules = styled.div`
  padding-top: 20px;

  img {
    display: block;
    margin: auto;
  }
  
  ${up('xl')`
    ${flex(2)}
    > div:first-child {
      flex-grow: 1;
    }

    &:before {
      position: absolute;
      content: '';
      display: block;
      background: url('./images/megaphone3.svg') no-repeat left;
      background-size: contain;
      top: 38vh;
      left: -7vw;
      width: 20vw;
      height: 32vh;
    }
  `}
`;

export const EventRuleImage = styled.div`
  ${down('xl')`
    margin-bottom: 2em;

    img {
      width: 80%;
    }
  `}

  ${up('xl')`
    padding-top: 15%;
    width: 30%;
  `}
`;

export const EventAwards = styled.div`
  position: relative;
  padding-top: 20px;
  
  h3 {
    ${up('xl')`
      text-align: center;
    `}
  }
  
  &:before {
    position: absolute;
    content: '';
    display: block;
    background: url('./images/megaphone4.svg') no-repeat;
    background-size: contain;

    ${down('xl')`
      top: -6vh;
      left: -2vw;
      width: 20vw;
      height: 15vh;
    `}

    ${up('xl')`
      top: 7vh;
      left: -6vw;
      width: 20vw;
      height: 12vh;
    `}
  }

  &:after {
    position: absolute;
    content: '';
    display: block;
    bottom: -3vh;
    right: -1vw;
    width: 19vw;
    height: 15vh;
    background: url('./images/megaphone5.svg') no-repeat right;
    background-size: contain;
    transform: translate(15%,120%);

    ${down('xl')`
      bottom: -3vh;
      right: -1vw;
      width: 19vw;
      height: 15vh;
    `}

    ${up('xl')`
      bottom: -8vh;
      right: -5vw;
      width: 20vw;
      height: 20vh;
    `}
  }
`;

export const EventAwardsCards = styled.div`
  img {
    width: 100%;
    max-width: 53.333333vw;
    display: block;
    margin: auto;
    object-fit: cover;
    box-shadow: 0px 0px 15px rgba(184, 184, 184, 0.15);
    border-radius: 20px;
  }

  ${down('xl')`
    ${flex(1, '8px 34px')}
  `}

  ${up('xl')`
    padding: 0 4em;
    ${flex(3, '8px 18px')}

    img {
      max-width: 240px;
    }
  `}
`;

export const Download = styled.section`
  overflow: hidden;
  padding: 40px 30px 0;
  background: #2B7AF8;
  
  ${down('xl')`
    max-height: 100vh;
  `}

  ${up('xl')`
    max-height: 65vh;
    padding: 10.5vh 16vw 0;
    ${flex(2)}
  `}
`;

export const DownloadTitle = styled.h2`
  text-align: left;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.025em;
  padding-right: 3rem;
  color: ${({ theme }) => theme.color.white};
  
  ${down('xl')`
    font-size: 24px;
  `}
  
  ${up('xl')`
    padding-top: 5vh;
    font-size: 34px;
  `}
`;

export const DownloadParagraph = styled.p`
  padding-top: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  color: ${({ theme }) => theme.color.white};
`;

export const DownloadImages = styled.div`
  padding: 22px 0;

  > img {
    cursor: pointer;
  }

  ${down('xl')`
    ${flex()}
    justify-content: space-between;

    img {
      width: 45%;
    }
  `}
  
  ${up('xl')`
    img {
      width: 35%;
      padding-right: 1.5em;
    }
  `}
`;

export const Phone = styled.div`
  ${down('xl')`
    width: 110%;
    transform: translate(-5%);

    img {
      object-fit: cover;
    }
  `}

   ${up('xl')`
    text-align: center;
    transform: translate(10%);

    img {
      width: 65%;
    }
  `}
`;