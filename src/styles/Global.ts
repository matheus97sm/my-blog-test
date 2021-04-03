import { createGlobalStyle, keyframes } from 'styled-components';
import { lighten } from 'polished';

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #ddd;
    --bluePurple: #5E00CC;
    --purple: #9F00DB;
    --pink: #E300EB;
    --black: #000518;
    --textColor: #6d6d6d;
    --alert: #F84C77;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    color: var(---black);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }

  input, button, textarea {
    font-family: Arial, Helvetica, sans-serif;
  }

  input, textarea {
    padding: .75rem 1.25rem;

    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, .1);
    border: none;

    color: var(--textColor);
    font-size: 1rem;
  }

  button[type="submit"] {
    padding: 0.75rem 2rem;
    
    background-color: var(--purple);
    border: none;
    border-radius: .25rem;
    
    color: #fff;
    font-size: 1rem;

    transition: .3s background-color;
    cursor: pointer;

    svg {
      animation: ${spinAnimation} 2s infinite linear;

    }

    &:hover {
      background-color: ${lighten(0.1, '#9F00DB')}
    }
  }
`;
