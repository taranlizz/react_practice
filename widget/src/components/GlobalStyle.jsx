import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
body {
font-family: sans-serif;
line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
margin: 0;
}

ul{
    list-style: none;
}

ul,
ol {
margin: 0;
padding: 0;
}

img {
display: block;
max-width: 100%;
height: auto;
}

button{
    cursor: pointer;
}

`;
