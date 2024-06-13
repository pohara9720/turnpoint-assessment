import { Grid, Paper, SelectInput } from "src/components";
import { useAppContext } from "src/state/application/AppProvider";
import { FundingSource, Language } from "src/types";

const fundingOptions = Object.values(FundingSource)
const languageOptions = Object.values(Language)

export function ClientFundingForm(): JSX.Element {
  const { formData, onFormChange,fieldHasError } = useAppContext();

  const onChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    onFormChange(name, value);
  };

  return (
    <Paper>
      <Grid>
        <SelectInput
          name="language"
          label="Primary Language"
          onChange={onChange}
          options={languageOptions}
          value={formData.language}
          error={fieldHasError("language")}
        />
        <SelectInput
          name="fundingSource"
          label="Funding Source"
          onChange={onChange}
          value={formData.fundingSource}
          options={fundingOptions}
          error={fieldHasError("fundingSource")}
        />
      </Grid>
    </Paper>
  );
}
