import { useGlobalState } from "./state";
import HamburgerMenu from "./components/hamburgerMenu";
import { MainContainer } from "./styles";

//{useGlobalState("language")[0] === "pt" ? (
//  <h1>Ola Mundo</h1>
//) : (
//  <h1>Hello World</h1>
//)}

function App() {
  return (
    <MainContainer>
      <HamburgerMenu />
      {useGlobalState("language")[0] === "pt" ? (
        <h1>Ola Mundo</h1>
      ) : (
        <h1>Hello World</h1>
      )}
    </MainContainer>
  );
}

export default App;
