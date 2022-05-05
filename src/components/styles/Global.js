import { createGlobalStyle } from "styled-components";

export const ResetStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const GlobalStyles = createGlobalStyle`
  :root {
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 12px;
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 16px;
    }
  }

  * {
    box-sizing: border-box;
    font-family: 'Inter', 'Noto Sans TC';
    font-size: 18px;
  }

  body {
    background: ${({ theme }) => theme.color.lightGray};
    overflow-x: hidden;
  }

  img {
    width: 100%;
    object-fit: contain;
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 3.25rem;
    font-weight: 700;
    line-height: 1.25;
    color: ${({ theme }) => theme.color.primary};
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.25;
    color: ${({ theme }) => theme.color.secondary};
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1.25;
    color: ${({ theme }) => theme.color.secondary};
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 600;
    color: ${({ theme }) => theme.color.secondary};
  }

  h5 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.625;
    color: ${({ theme }) => theme.color.white};
  }

  p {
    font-size: 1.125rem;
    line-height: 1.875;
    color: ${({ theme }) => theme.color.secondary};
  }
`;