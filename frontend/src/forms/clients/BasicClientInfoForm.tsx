import { Grid, Paper, TextInput } from "src/components";

export function BasicClientInfoForm(): JSX.Element {
  return (
    <Paper>
      <Grid>
        <TextInput
          name="name"
          label="Client Name"
          onChange={(e) => console.log(e.target.value)}
        />
        <TextInput
          name="dob"
          label="Date of Birth"
          onChange={(e) => console.log(e.target.value)}
        />
      </Grid>
    </Paper>
  );
}
