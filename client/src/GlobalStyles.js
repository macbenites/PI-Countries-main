import { createGlobalStyle } from "styled-components";
import background from "./assets/background.jpg";

export const GlobalStyles = createGlobalStyle`

:root{
     --main-color : #1F1D36;
     --background-color: #2b2c34; 
     --text-color: #fffffe;
     --primary : #01937c;
     --secondary : #ff8906;
     --tertiary : #3da9fc;
     --headline : #094067;
     --highligth : #3da9fc;
     
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body{
    background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
       
}
`;
