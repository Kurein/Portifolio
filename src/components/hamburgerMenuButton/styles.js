import styled from "styled-components";
import { useGlobalState } from "../../state";
import { colors } from "../../utils";

export const Container = styled.div`
  position: absolute;
  right: 5%;
  top: 2%;
  :hover {
    cursor: pointer;
  }
`;

export const DivLine = styled.div`
  width: 25px;
  height: 4px;
  margin-bottom: 3px;
  background-color: ${() =>
    useGlobalState("hamburgerMenu")[0] ? colors.black : colors.white};
`;
