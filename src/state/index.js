import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  language: "pt",
  hamburgerMenu: false,
});

export { setGlobalState, useGlobalState };
