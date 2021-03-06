import { ThemeProvider } from "styled-components";
import Header  from "./components/Header";
import { Container } from "./components/styles/Container.styled"
import GlobalStyles from "./components/styles/Global";
const theme = {
  colors: {
    header: "#edfbff",
    body: "#fff",
    footer: "#0303333"
  }
}

function App() {
  return (
   <ThemeProvider theme = {theme}>
    <>
    <GlobalStyles />
    <Header />
    <Container>
      <h1>Hello World</h1>
    </Container>
  </>

   </ThemeProvider>
  );
}

export default App
