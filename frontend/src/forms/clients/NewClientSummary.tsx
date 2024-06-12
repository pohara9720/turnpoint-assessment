import { Grid, Paper } from "src/components";
import { useAppContext } from "src/state/application/AppProvider";

export function NewClientSummary(): JSX.Element {
  const { formData } = useAppContext();
  const { name, dob, fundingSource, language } = formData;
  return (
    <Paper>
      <Grid>
        <div>{name}</div>
        <div>{dob}</div>
        <div>{language}</div>
        <div>{fundingSource}</div>
      </Grid>
    </Paper>
  );
}
