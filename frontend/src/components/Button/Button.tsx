import styled, { css } from "styled-components";
import { Palette } from "../palette";

export const Button = styled.div<{ $primary?: boolean; $fixedWidth?: number }>`
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  ${({ $fixedWidth }) =>
    $fixedWidth &&
    css`
      max-width: ${$fixedWidth}px;
    `}

  ${({ $primary }) =>
    $primary
      ? css`
          background-color: ${Palette.Primary};
          color: ${Palette.White};
        `
      : css`
          background-color: ${Palette.Secondary};
          color: black;
        `}
`;
