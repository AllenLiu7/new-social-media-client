import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    input:focus, textarea:focus, select:focus{
        outline: none;
    }
  }
`;

export default GlobalStyle;
