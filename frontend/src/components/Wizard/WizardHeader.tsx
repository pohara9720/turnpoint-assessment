import { WizardHeaderProps } from "src/types";
import styled, { css } from "styled-components";
import { Palette } from "../palette";

const ProgressContainer = styled.div`
  margin: 0;
  max-width: 635px;
  width: 100%;
  @media (min-width: 600px) {
    margin: 0 0 20px auto;
  }
`;

const ProgressSteps = styled.div`
  display: flex;
  max-width: 635px;
`;

const ProgressStep = styled.div<{ state: string }>`
  flex: 1 0 auto;
  position: relative;
  &:last-child {
    width: 8px;
    flex-grow: 0;
  }
  &:not(:last-child) {
    &:after {
      content: "";
      position: absolute;
      top: 5px;
      left: 10px;
      right: 0;
      height: 2px;

      ${({ state }) =>
        state === "active" &&
        css`
          background: ${Palette.Secondary};
        `}
      ${({ state }) =>
        state === "past" &&
        css`
          background-color: ${Palette.Primary};
        `}
      ${({ state }) =>
        state === "future" &&
        css`
          background: ${Palette.Secondary};
        `}
    }
  }
`;

const ProgressStepIndicator = styled.div<{ state: string }>`
  height: 8px;
  width: 8px;
  flex: 1 0 auto;
  border-radius: 50%;
  border: solid 2px;
  ${({ state }) =>
    state === "active" &&
    css`
      border-color: ${Palette.Primary};
    `}
  ${({ state }) =>
    state === "past" &&
    css`
      border-color: ${Palette.Primary};
      background-color: ${Palette.Primary};
    `}
  ${({ state }) =>
    state === "future" &&
    css`
      border-color: ${Palette.Secondary};
    `}
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const StepTitle = styled.div`
  font-size: 21px;
  font-weight: 900;
  margin-bottom: 16px;
`;

const calculateState = (active: number, index: number) => {
  if (active === index) {
    return "active";
  }
  return active > index ? "past" : "future";
};

export function WizardHeader({
  title,
  active,
  steps,
}: WizardHeaderProps): JSX.Element {
  return (
    <Header>
      <StepTitle>{title}</StepTitle>
      <ProgressContainer>
        <ProgressSteps>
          {steps.map((_value: JSX.Element, index: number): JSX.Element => {
            const state = calculateState(active, index);
            return (
              <ProgressStep key={index} state={state}>
                <ProgressStepIndicator state={state} />
              </ProgressStep>
            );
          })}
        </ProgressSteps>
      </ProgressContainer>
    </Header>
  );
}
