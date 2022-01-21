import { createGlobalStyle } from "styled-components";
import background from "./assets/background.jpg";

export const GlobalStyles = createGlobalStyle`

:root{
     --main-color : #1F1D36;
     --background-color: #16161a; 
     --text-color: #fffffe;
     --primary : #01937c;
     --secondary : #ff8906;
     --tertiary : #3da9fc;

}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;      
}
`;
