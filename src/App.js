import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// css
import { ThemeProvider } from "styled-components";
import { ResetStyles, GlobalStyles } from './components/styles/Global';

// pages
import Main from './pages/Main';
import News from './pages/News';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Campaign from './pages/Campaign';

// components
import Header from './components/Header';
import Footer from './components/Footer';

const theme = {
  breakpoints: {
    mobile: '768px',
    tablet: '992px',
    desktop: '1440px'
  },
  color: {
    primary: '#267af8',
    secondary: '#132e57',
    lightBlue: '#CCDBFA',
    white: '#fff',
    lightGray: '#F9F9F9',
    pGray: '#717A8E',
    timeGray: '#BFC2C8',
    gray: '#697895',
    darkGray: '#333',
    black: '#000'
  },
  padding: {
    header: '15px 80px',
    container: '20px 80px',
    footer: '20.5px 0px'
  },
  borderRadius: '5px',
  cardShadow: '3px 3px 10px rgba(118, 118, 118, 0.1)'
}

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyles />
      <Router>
        {(window.location.pathname !== '/campaign') && <Header />}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/news' element={<News />} />
          <Route path='/about' element={<About />} />
          <Route path='/faqs' element={<FAQs />} />
          <Route path='/campaign' element={<Campaign />} />
        </Routes>
        {(window.location.pathname !== '/campaign') && <Footer />}
      </Router>
    </ThemeProvider>
  )
}