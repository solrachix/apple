import { createGlobalStyle } from "styled-components";
import { rgba } from "polished";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #__next {
    width: 100vw;
    height: 100vh;

    background: ${(props) => props.theme.colors.background.normal};
    color: ${(props) => props.theme.colors.text.light};

    overflow-x: visible;
  }

  @media (max-width: 1088px){
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px){
    html {
      font-size: 87.5%;
    }
  }


  body, input, textarea, button, select, a {
    color: inherit;
    outline: none;

    text-decoration: none;
    font-family: Poppins, 'Roboto', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.text.light};
    font-family: Poppins, sans-serif;
  }
  button {
    cursor: pointer;
  }
  input[type=search] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    font-family: inherit;
    font-size: 100%;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button {
    display: none;
  }
  ::-webkit-scrollbar {
    width: 4px;
    background: ${({ theme }) => theme.colors.background.normal};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => rgba(theme.colors.background.lighter, 1)};
    border-radius: 50px;
  }
`;
