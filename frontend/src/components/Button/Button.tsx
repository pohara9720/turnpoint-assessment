import styled, { css } from "styled-components";
import { ifProp, prop } from "styled-tools";
import { Palette } from "../palette";

export const Button = styled.div<{ primary?: boolean; maxWidth?: number }>`
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  ${ifProp(
    "maxWidth",
    css`
      max-width: ${prop("maxWidth")}px;
    `
  )}
  ${ifProp(
    "primary",
    css`
      background-color: ${Palette.Primary};
      color: ${Palette.White};
    `,
    css`
      background-color: ${Palette.Secondary};
      color: black;
    `
  )}
`;
