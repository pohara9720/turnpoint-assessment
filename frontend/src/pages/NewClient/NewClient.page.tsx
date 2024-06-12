import { Paper, Wizard, WizardStep } from "src/components";
import { ClientFundingForm, BasicClientInfoForm } from "src/forms";
import styled from "styled-components";
const Container = styled.div`
  padding: 64px;
`;

export function NewClientPage(): JSX.Element {
  return (
    <Container>
      <Wizard headerBreakpoint={600} progressStepsWidth={635} showHeader>
        <WizardStep title="Basic Information">
          <BasicClientInfoForm />
        </WizardStep>
        <WizardStep title="Funding Source">
          <ClientFundingForm />
        </WizardStep>
        <WizardStep title="Summary" last onLast={() => console.log("last")}>
          <Paper>
            <div>step summary</div>
          </Paper>
        </WizardStep>
      </Wizard>
    </Container>
  );
}
