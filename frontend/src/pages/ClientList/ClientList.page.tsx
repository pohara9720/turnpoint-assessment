import { NavLink } from "react-router-dom";
import { Button, Show } from "src/components";
import { useAppContext } from "src/state";
import styled from "styled-components";
import { ClientCard } from "./ClientCard";
import { useEffect } from "react";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const ListItem = styled.div`
  margin: 8px;
`;

export function ClientListPage(): JSX.Element {
  const { clients, deleteClient, getClients } = useAppContext();

  useEffect(() => {
    getClients();
  }, [getClients]);

  return (
    <Container>
      <NavLink to="/new-client">
        <Button $primary $fixedWidth={75}>
          New Client
        </Button>
      </NavLink>
      <Show when={!clients?.length}>
        <h3>Please add a client.</h3>
      </Show>
      <Container>
        {clients?.map((client) => (
          <ListItem key={client.id}>
            <ClientCard client={client} onDelete={deleteClient} />
          </ListItem>
        ))}
      </Container>
    </Container>
  );
}
