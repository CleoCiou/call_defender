import { Link } from 'react-router-dom';

// css
import { StyledFooter, Copyright } from './styles/Footer.styled.js';
import { FlexContainer } from './styles/Container';

const Footer = () => {
  return (
    <StyledFooter>
      <FlexContainer>
        <FlexContainer full justifyContent='center' alignItems='flex-start'>
          <ul>
            <li><h5>公司</h5></li>
            <li><Link to='/'>Gogolook</Link></li>
            <li><Link to='/'>隱私權政策</Link></li>
            <li><Link to='/'>服務條款</Link></li>
          </ul>
          <ul>
            <li><h5>服務</h5></li>
            <li><Link to='/'>聯絡我們</Link></li>
            <li><Link to='/'>常見問題</Link></li>
          </ul>
          <ul>
            <li><h5>追蹤我們</h5></li>
            <img src='./images/icon_facebook.png' alt='' />
            <img src='./images/icon_instagram.png' alt='' />
          </ul>
        </FlexContainer>
        <Copyright>
          <img src='./images/logo_call_defender.svg' alt='' />
          <span>&copy; 2022 Gogolook. All Rights Reserved.</span>
        </Copyright>
      </FlexContainer>
    </StyledFooter>
  )
}

export default Footer