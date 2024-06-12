import { Client } from "./client.types";

export interface AppContextType {
  formData: {
    clientName: string;
    dateOfBirth: string;
    mainLanguage: string;
    secondaryLanguage: string;
    fundingSource: string;
  };
  onFormChange: (name: string, value: string) => void;
  clients: Client[];
  addClient: (client: Client) => void;
  deleteClient: (clientId: string) => void;
}