import { useNavigate } from "react-router-dom";
import { Wizard, WizardStep } from "src/components";
import {
  ClientFundingForm,
  BasicClientInfoForm,
  NewClientSummary,
  validateFormData,
} from "src/forms";
import { useAppContext } from "src/state";
import { Client } from "src/types";
import styled from "styled-components";

const Container = styled.div`
  padding: 64px;
`;

export function NewClientPage(): JSX.Element {
  const { formData, addClient, setFormErrors, formErrors, resetForm } =
    useAppContext();
  const navigate = useNavigate();

  const onSubmit = async () => {
    const errors = validateFormData(formData as Partial<Client>);
    if (errors) {
      setFormErrors(errors);
      return;
    }
    addClient(formData as Client);
    resetForm();
    navigate("/");
  };

  return (
    <Container>
      <Wizard error={Boolean(formErrors)}>
        <WizardStep title="Basic Information">
          <BasicClientInfoForm />
        </WizardStep>
        <WizardStep title="Funding Source">
          <ClientFundingForm />
        </WizardStep>
        <WizardStep title="Review Summary" last onLast={onSubmit}>
          <NewClientSummary />
        </WizardStep>
      </Wizard>
    </Container>
  );
}
