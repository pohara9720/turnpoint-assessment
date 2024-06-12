import { useNavigate } from "react-router-dom";
import { Wizard, WizardStep } from "src/components";
import {
  ClientFundingForm,
  BasicClientInfoForm,
  NewClientSummary,
} from "src/forms";
import { useAppContext } from "src/state/application/AppProvider";
import styled from "styled-components";
const Container = styled.div`
  padding: 64px;
`;

export function NewClientPage(): JSX.Element {
  const { formData, addClient } = useAppContext();
  const navigate = useNavigate()

  const onSubmit = () => {
    addClient(formData)
    navigate("/")
  }

  return (
    <Container>
      <Wizard headerBreakpoint={600} progressStepsWidth={635} showHeader>
        <WizardStep title="Basic Information">
          <BasicClientInfoForm />
        </WizardStep>
        <WizardStep title="Funding Source">
          <ClientFundingForm />
        </WizardStep>
        <WizardStep
          title="Review Summary"
          last
          onLast={onSubmit}
        >
          <NewClientSummary />
        </WizardStep>
      </Wizard>
    </Container>
  );
}
