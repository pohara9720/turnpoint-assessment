import styled from "styled-components";
import { Palette } from "../palette";

export const Paper = styled.div`
  padding: 32px;
  border-radius: 8px;
  background-color: ${Palette.White};
  box-shadow: 0 5px 7px 0 ${Palette.Secondary};
`;
