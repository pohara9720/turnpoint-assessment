import React, { useState } from "react";
import styled from "styled-components";
import { WizardProps } from "src/types";
import { Palette } from "../palette";
import { WizardHeader } from "./WizardHeader";

const StepContent = styled.div`
  margin-top: 16px;
`;

const Alert = styled.div`
  background-color: ${Palette.Error};
  color: white;
  padding: 16px;
  font-weight: bold;
  border-radius: 8px;
  max-width: 100%;
`;

const WizardContainer = styled.div``;

export const Wizard = ({ children: steps, error }: WizardProps) => {
  const [active, setActive] = useState(0);

  if (!steps || !steps.length) {
    return null;
  }

  const activeComponent = steps[active];

  if (!activeComponent) {
    throw new Error("Error rendering step");
  }

  const { title } = activeComponent.props;

  const wizardCtrl = {
    prev: () => (active === 0 ? null : setActive(active - 1)),
    next: () => (active === steps.length - 1 ? null : setActive(active + 1)),
  };

  return (
    <WizardContainer>
      <WizardHeader title={title} active={active} steps={steps} />
      {error ? (
        <Alert>
          There is a problems in the form please go back and correct them before
          submitting
        </Alert>
      ) : null}
      <StepContent>
        {React.cloneElement(activeComponent as JSX.Element, {
          wizard: wizardCtrl,
        })}
      </StepContent>
    </WizardContainer>
  );
};
