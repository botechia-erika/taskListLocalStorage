import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   }

   :root{
     font-size: border-box;
     --color-bg: green;}
   
   body{
     padding: 1rem;
    background: var(--color-bg);
     color: white;
    text-align: center;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
