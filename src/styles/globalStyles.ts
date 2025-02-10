import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.slate[100]};
    font-family: 'NanumSquare', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
`;

export default GlobalStyle;
