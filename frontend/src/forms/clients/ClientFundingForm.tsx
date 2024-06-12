import { Grid, Paper, SelectInput, TextInput } from "src/components";
import { useAppContext } from "src/state/application/AppProvider";
import { FundingSource } from "src/types";

const fundingOptions = Object.values(FundingSource)

export function ClientFundingForm(): JSX.Element {
  const { formData, onFormChange } = useAppContext();

  const onChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    onFormChange(name, value);
  };

  return (
    <Paper>
      <Grid>
        <TextInput
          name="language"
          label="Primary Language"
          onChange={onChange}
          value={formData.language}
        />
        <SelectInput
          name="fundingSource"
          label="Funding Source"
          onChange={onChange}
          value={formData.fundingSource}
          options={fundingOptions}
        />
      </Grid>
    </Paper>
  );
}
