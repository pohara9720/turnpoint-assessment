import { NavLink } from "react-router-dom";
import { Button, Grid } from "src/components";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export function ClientListPage(): JSX.Element {
  return (
    <Container>
      <Grid>
        <div>Client name</div>
        <div>Client dob</div>
        <div>Client language</div>
        <div>funding source</div>
      </Grid>
      <NavLink to="/new-client">
        <Button>New Client</Button>
      </NavLink>
    </Container>
  );
}
