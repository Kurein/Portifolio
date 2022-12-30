import { useGlobalState } from "./state";
import HamburgerMenu from "./components/hamburgerMenu";
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <HamburgerMenu />
      {useGlobalState("language")[0] === "pt" ? (
        <h1>Ola Mundo</h1>
      ) : (
        <h1>Hello World</h1>
      )}
      <a href="/pages">pages</a>
    </Container>
  );
}

export default App;
