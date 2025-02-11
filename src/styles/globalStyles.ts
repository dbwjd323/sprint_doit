import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'NanumSquare', sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      max-width: 960px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      max-width: 720px;
      padding: 15px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      max-width: 100%;
      padding: 10px;
    }
  }
`;

export default GlobalStyle;
