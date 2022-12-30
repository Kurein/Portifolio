import styled from "styled-components";
import { useGlobalState } from "../../state";
import { colors, screenSizes } from "../../utils";

export const Container = styled.div`
  @media ${screenSizes.laptop} {
    display: none;
  }
`;

export const HamburgerButtonContainer = styled.div`
  display: ${() => (useGlobalState("hamburgerMenu")[0] ? "none" : "block")};
`;

export const MenuContainer = styled.div`
  display: ${() => (useGlobalState("hamburgerMenu")[0] ? "block" : "none")};
  background-color: ${colors.black80};
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const Menu = styled.div`
  height: 100%;
  width: 75%;
  position: absolute;
  background-color: ${colors.gray};
  right: 0px;
  @media ${screenSizes.tablet} {
    width: 50%;
  }
`;
