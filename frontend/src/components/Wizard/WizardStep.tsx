import styled from "styled-components";
import { StepProps } from "src/types";
import { Button } from "../Button";

const WizardButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;
export const WizardStep = ({
  wizard,
  children,
  last,
  onLast,
}: StepProps): JSX.Element => {
  return (
    <div>
      {children}
      <WizardButtons>
        <Button onClick={wizard?.prev} data-testid="wizard-prev" >Prev</Button>
        {!last && (
          <Button $primary onClick={wizard?.next} data-testid="wizard-next" >
            Next
          </Button>
        )}
        {last && (
          <Button onClick={onLast} $primary>
            Submit
          </Button>
        )}
      </WizardButtons>
    </div>
  );
};
