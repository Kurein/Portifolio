import { useGlobalState } from "./state";

import LanguageButtons from "./components/languageButtons";

function App() {
  return (
    <div>
      <LanguageButtons />

      {useGlobalState("language")[0] === "pt" ? (
        <h1>Ola Mundo</h1>
      ) : (
        <h1>Hello World</h1>
      )}
    </div>
  );
}

export default App;
