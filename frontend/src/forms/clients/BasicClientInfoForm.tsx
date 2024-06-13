import { Grid, Paper, TextInput } from "src/components";
import { useAppContext } from "src/state/application/AppProvider";

export function BasicClientInfoForm(): JSX.Element {
  const { formData, onFormChange, fieldHasError } = useAppContext();

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    onFormChange(name, value);
  };

  return (
    <Paper>
      <Grid>
        <TextInput
          name="name"
          label="Client Name"
          onChange={onChange}
          value={formData.name}
          error={fieldHasError("name")}
        />
        <TextInput
          name="dob"
          label="Date of Birth"
          onChange={onChange}
          value={formData.dob}
          type="date"
          error={fieldHasError("dob")}
        />
      </Grid>
    </Paper>
  );
}
