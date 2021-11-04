import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html, body {
    margin: 0;
    padding: 0;
}

*, *::after, *::before {
    box-sizing: border-box;
}

body {
    background: ${({theme}) => theme.colors.body};
    font-family: georgia;
    font-size: 1.5rem;
}
p {
    opacity: 0.6;
    line-height: 1.5
}

`

export default GlobalStyles