import { css } from "styled-components";

export const comicBookOverlay = css`
  font-family: "Comic Neue", cursive;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Bangers", cursive;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 0 #000000;
  }

  button {
    font-family: 'Bangers', cursive;
    text-transform: uppercase;
    border: 3px solid #000000;
    box-shadow: 3px 3px 0 #000000;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: translate(-2px, -2px);
      box-shadow: 5px 5px 0 #000000;
    }
  }

  .comic-panel {
    background-color: #FFFFFF;
    border: 3px solid #000000;
    box-shadow: 5px 5px 0 #000000;
    padding: 15px;
    margin-bottom: 20px;
  }

  .speech-bubble {
    position: relative;
    background-color: #FFFFFF;
    border-radius: 20px;
    padding: 15px;
    margin-bottom: 20px;
    border: 3px solid #000000;

    &:after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 50%;
      border: 10px solid transparent;
      border-top-color: #000000;
      border-bottom: 0;
      margin-left: -10px;
    }
  }
`;
