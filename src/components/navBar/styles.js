import styled from "styled-components";
import { colors, screenSizes } from "../../utils";

export const Container = styled.div`
  display: none;
  @media ${screenSizes.laptop} {
    display: block;
  }
`;

export const Buttons = styled.div``;
