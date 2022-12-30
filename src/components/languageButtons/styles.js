import styled from "styled-components";
import { useGlobalState } from "../../state";
import { colors, screenSizes } from "../../utils";

export const Container = styled.div`
  display: flex;
  width: 8em;

  @media ${screenSizes.tablet} {
    width: 10em;
  }
  @media ${screenSizes.laptop} {
    width: 12em;
  }
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
    useGlobalState("language")[0] === "pt"
      ? colors.darkGolden50
      : colors.lightGolden50};
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
    useGlobalState("language")[0] === "en"
      ? colors.darkGolden50
      : colors.lightGolden50};
  :hover {
    cursor: pointer;
  }
`;
