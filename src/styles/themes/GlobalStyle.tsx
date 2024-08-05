import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Comic Neue', cursive;
        background-color: ${({ theme }) => theme.palette.background.default};
        color: ${({ theme }) => theme.palette.text.primary};
        line-height: 1.6;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Bangers', cursive;
        color: ${({ theme }) => theme.palette.primary.main};
        margin-bottom: ${({ theme }) => theme.spacing(2)};
    }

    p {
        margin-bottom: ${({ theme }) => theme.spacing(2)};
    }

    a {
        color: ${({ theme }) => theme.palette.secondary.main};
        text-decoration: none;
        transition: color 0.3s ease-in-out;
        &:hover {
            color: ${({ theme }) => theme.palette.secondary.dark};
            text-decoration: underline;
        }
    }
`;

const GlobalStyleWrapper = () => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
  </>
);

export default GlobalStyleWrapper;
