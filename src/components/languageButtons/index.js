import { setGlobalState } from "../../state";

function LanguageButtons() {
  const languageHandler = (language) => {
    setGlobalState("language", language);
  };

  return (
    <div>
      <button onClick={() => languageHandler("pt")}>PT</button>
      <button onClick={() => languageHandler("en")}>EN</button>
    </div>
  );
}

export default LanguageButtons;
