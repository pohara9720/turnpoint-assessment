import { Grid, Paper, TextInput } from "src/components";

export function ClientFundingForm(): JSX.Element {
  return (
    <Paper>
      <Grid>
        <TextInput
          name="language"
          label="Primary Language"
          onChange={(e) => console.log(e.target.value)}
        />
        <TextInput
          name="fundingSource"
          label="Funding Source"
          onChange={(e) => console.log(e.target.value)}
        />
      </Grid>
    </Paper>
  );
}
