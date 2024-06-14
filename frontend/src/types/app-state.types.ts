import { FormErrors } from ".";
import { Client } from "./client.types";

export interface AppContextType {
  formData: {
    name: string;
    dob: string;
    language: string;
    fundingSource: string;
  };
  formErrors: FormErrors | null;
  setFormErrors: (errors: FormErrors | null) => void;
  fieldHasError: (name: keyof FormErrors) => string | undefined;
  onFormChange: (name: string, value: string) => void;
  clients: Client[];
  addClient: (client: Client) => Promise<void>;
  deleteClient: (clientId: string) => Promise<void>;
  getClients: () => Promise<void>;
  resetForm: () => void;
}
