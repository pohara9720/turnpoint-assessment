import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";
import { Palette } from "../palette";

export const Button = styled.div<{ primary?: boolean }>`
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
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
