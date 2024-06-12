import { NavLink } from "react-router-dom";
import { Button, Grid } from "src/components";
import { useAppContext } from "src/state/application/AppProvider";
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
  const { clients } = useAppContext();
  return (
    <Container>
      {clients?.map(({ name, dob, language, fundingSource, id }) => (
        <Grid key={id}>
          <div>{name}</div>
          <div>{dob}</div>
          <div>{language}</div>
          <div>{fundingSource}</div>
        </Grid>
      ))}

      <NavLink to="/new-client">
        <Button>New Client</Button>
      </NavLink>
    </Container>
  );
}
