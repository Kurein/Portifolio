import HamburgerMenuButton from "../hamburgerMenuButton";
import LanguageButtons from "../languageButtons";
import { Container, MenuContainer, Menu, ButtonsContainer } from "./styles";

function HamburgerMenu() {
  return (
    <Container>
      <ButtonsContainer>
        <HamburgerMenuButton state={true} />
      </ButtonsContainer>
      <MenuContainer>
        <Menu></Menu>
        <HamburgerMenuButton state={false} />
      </MenuContainer>
      <LanguageButtons />
    </Container>
  );
}

export default HamburgerMenu;
