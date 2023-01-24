import { useGlobalState } from "./state";
import HamburgerMenu from "./components/hamburgerMenu";
import { MainContainer } from "./styles";
import NavBar from "./components/navBar";

//{useGlobalState("language")[0] === "pt" ? (
//  <h1>Ola Mundo</h1>
//) : (
//  <h1>Hello World</h1>
//)}

function App() {
  return (
    <MainContainer>
      <HamburgerMenu />
      <NavBar />
    </MainContainer>
  );
}

export default App;
