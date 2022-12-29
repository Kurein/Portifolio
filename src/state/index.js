import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  language: "pt",
});

export { setGlobalState, useGlobalState };
