export type WizardProps = {
  children?: JSX.Element[];
  error?: boolean;
};

type WizardFunctions = {
  next: () => void;
  prev: () => void;
};
export type StepProps = {
  wizard?: WizardFunctions;
  children: JSX.Element | [JSX.Element];
  last?: boolean;
  title?: string;
  onLast?: () => void;
};

export type WizardHeaderProps = {
  title: string;
  active: number;
  steps: JSX.Element[];
};
