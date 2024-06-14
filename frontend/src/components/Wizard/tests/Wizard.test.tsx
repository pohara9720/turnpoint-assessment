import {
  render,
  fireEvent,
  queryByText,
  screen,
} from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Wizard } from "../Wizard";
import { WizardStep } from "..";

describe("Wizard Component", () => {
  it("handles next and prev buttons correctly", () => {
    const steps = [
      <WizardStep><div key="step1">Step 1</div></WizardStep>,
      <WizardStep><div key="step2">Step 2</div></WizardStep>,
      <WizardStep><div key="step3">Step 3</div></WizardStep>,
    ];

    const { container } = render(<Wizard>{steps}</Wizard>);

    const next = screen.getByTestId('wizard-next')
    const prev = screen.getByTestId('wizard-prev')

    fireEvent.click(next);
    expect(queryByText(container, "Step 2")).toBeDefined();

    fireEvent.click(next);
    expect(queryByText(container, "Step 3")).toBeDefined();

    fireEvent.click(prev);
    expect(queryByText(container, "Step 2")).toBeDefined();
  });

  it("throws error when rendering step if no steps are provided", () => {

    const { queryByText } = render(<Wizard />);

    expect(queryByText("Error rendering step")).toBeDefined();
  });
});
