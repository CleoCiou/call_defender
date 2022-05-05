import { useState } from "react";
import { Link } from 'react-router-dom';

// css
import Grayscale from "./styles/Grayscale";
import { StyledNavbar, Logo, TopMenu, ImgBuger, SpanBuger, RightMenu } from "./styles/Navbar.styled";
import { Button } from './styles/Button';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const location = useLocation();

  return (
    <StyledNavbar>

      {toggleMenu && <Grayscale />}

      <Logo>
        <img src='./images/logo.png' />
      </Logo>

      <TopMenu active={toggleMenu}>
        <Link to='/about'>關於我們</Link>
        <Link to='/faqs'>常見問題</Link>
      </TopMenu>
      
      <Button>免費下載</Button>

      <SpanBuger active={toggleMenu} onClick={() => setToggleMenu(!toggleMenu)}>
        <span></span>
      </SpanBuger>

    </StyledNavbar>
  )
}

export default Navbar
