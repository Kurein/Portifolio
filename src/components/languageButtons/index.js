import { setGlobalState } from "../../state";

import { Container, EngButton, PtButton } from "./styles";

import BRFlag from "../../assets/languageButtons/BR_Flag.png";
import USFlag from "../../assets/languageButtons/US_Flag.png";

function LanguageButtons() {
  const languageHandler = (language) => {
    setGlobalState("language", language);
  };

  return (
    <Container>
      <PtButton onClick={() => languageHandler("pt")}>
        <img src={BRFlag} alt="BR" />
      </PtButton>
      <EngButton onClick={() => languageHandler("en")}>
        <img src={USFlag} alt="USA" />
      </EngButton>
    </Container>
  );
}

export default LanguageButtons;
