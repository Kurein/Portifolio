import { setGlobalState } from "../../state";
import HamburgerMenuButton from "../hamburgerMenuButton";
import {
  Container,
  HamburgerButtonContainer,
  MenuContainer,
  Menu,
} from "./styles";

function HamburgerMenu() {
  return (
    <Container>
      <div onClick={() => setGlobalState("hamburgerMenu", true)}>
        <HamburgerButtonContainer>
          <HamburgerMenuButton />
        </HamburgerButtonContainer>
      </div>
      <MenuContainer>
        <Menu></Menu>
        <div onClick={() => setGlobalState("hamburgerMenu", false)}>
          <HamburgerMenuButton />
        </div>
      </MenuContainer>
    </Container>
  );
}

export default HamburgerMenu;
