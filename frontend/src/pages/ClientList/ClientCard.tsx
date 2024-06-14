import { Button, Grid, Paper } from "src/components";
import { Palette } from "src/components/palette";
import { Client } from "src/types";
import styled from "styled-components";

const Divider = styled.div`
  height: 1px;
  background: ${Palette.Secondary};
  margin: 8px 0;
`;

export function ClientCard({
  client,
  onDelete,
}: {
  client: Client;
  onDelete: (id: string) => void;
}): JSX.Element {
  const { name, dob, fundingSource, language, id } = client;

  return (
    <Paper>
      <Grid>
        <div>
          <h3>Name</h3>
          <div>{name}</div>
        </div>
        <div>
          <h3>Date of Birth</h3>
          <div>{dob}</div>
        </div>
        <div>
          <h3>Primary language</h3>
          <div>{language}</div>
        </div>
        <div>
          <h3>Funding Source</h3>
          <div>{fundingSource}</div>
        </div>
      </Grid>
      <Divider />
      <Button $primary onClick={() => onDelete(id)} $fixedWidth={100}>
        Delete Client
      </Button>
    </Paper>
  );
}
