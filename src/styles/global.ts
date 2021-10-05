import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Gotham Light'),
        url('/fonts/gotham-bold.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Gotham Book'),
        url('/fonts/gotham-book.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 600;
    src: local('Gotham Bold'),
        url('/fonts/gotham-light.woff2') format('woff2'),
  }

  @font-face {
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Gotham Black'),
        url('/fonts/gotham-black.woff2') format('woff2'),
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      background-color: ${theme.colors.mainBg};
    }
  `}


`

export default GlobalStyles
