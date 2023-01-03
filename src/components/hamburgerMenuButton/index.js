import { MenuFixedBar, Container, DivLine } from "./styles";
import { setGlobalState } from "../../state";

function HamburgerMenuButton({ state }) {
  return (
    <MenuFixedBar>
      <div onClick={() => setGlobalState("hamburgerMenu", state)}>
        <Container>
          <DivLine />
          <DivLine />
          <DivLine />
        </Container>
      </div>
    </MenuFixedBar>
  );
}

export default HamburgerMenuButton;
