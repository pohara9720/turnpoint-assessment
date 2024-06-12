import { NavLink } from "react-router-dom";
import { Button, Paper, Grid } from "src/components";

export function NotFoundPage(): JSX.Element {
  return (
    <Grid>
      <Paper>Oops! This page does not exist</Paper>
      <NavLink to="/">
        <Button>Go Home</Button>
      </NavLink>
    </Grid>
  );
}
