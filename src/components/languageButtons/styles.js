import styled from "styled-components";
import { useGlobalState } from "../../state";
import { colors, screenSizes } from "../../utils";

export const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  right: 2%;
  top: 1%;
  width: 5em;

  @media ${screenSizes.tablet} {
    flex-direction: row;
    right: 2%;
    top: 2%;
    width: 10em;
  }
  @media ${screenSizes.laptop} {
    flex-direction: row;
    right: 3%;
    top: 3%;
    width: 12em;
  }
  @media ${screenSizes.ultrawide} {
    flex-direction: row;
    right: 3%;
    top: 3%;
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
    useGlobalState("language")[0] === "pt"
      ? colors.darkGolden
      : colors.lightGolden};
  margin-bottom: 5px;
  :hover {
    cursor: pointer;
  }

  @media ${screenSizes.tablet} {
    margin-right: 5px;
    margin-bottom: 0px;
  }
  @media ${screenSizes.laptop} {
    margin-right: 10px;
  }
  @media ${screenSizes.ultrawide} {
    margin-right: 20px;
  }
`;

export const EngButton = styled.button`
  > img {
    width: 100%;
    height: 100%;
  }
  border: none;
  background-color: ${() =>
    useGlobalState("language")[0] === "en"
      ? colors.darkGolden
      : colors.lightGolden};
  :hover {
    cursor: pointer;
  }
`;
