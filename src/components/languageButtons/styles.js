import styled from "styled-components";
import { useGlobalState } from "../../state";
import { colors, screenSizes } from "../../utils";

export const Container = styled.div`
  display: flex;
  width: 8em;
  position: fixed;
  top: 0.5%;
  left: 3%;

  @media ${screenSizes.ultrawide} {
    width: 20em;
  }
`;

export const PtButton = styled.button`
  > img {
    width: 100%;
    height: 100%;
  }
  border: none;
  background-color: ${() =>
    useGlobalState("language")[0] === "pt" ? colors.black80 : colors.gray};
  :hover {
    cursor: pointer;
  }
  margin-right: 10px;
`;

export const EngButton = styled.button`
  > img {
    width: 100%;
    height: 100%;
  }
  border: none;
  background-color: ${() =>
    useGlobalState("language")[0] === "en" ? colors.black80 : colors.gray};
  :hover {
    cursor: pointer;
  }
`;
