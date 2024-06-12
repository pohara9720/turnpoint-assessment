import { Client } from "./client.types";

export interface AppContextType {
  formData: {
    name: string;
    dob: string;
    language: string;
    fundingSource: string;
  };
  onFormChange: (name: string, value: string) => void;
  clients: Client[];
  addClient: (client: Client) => void;
  deleteClient: (clientId: string) => void;
}