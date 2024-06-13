import { createContext, useState, useContext } from "react";
import { useApi } from "src/api";
import { Client, FormErrors, HttpMethod } from "src/types";
import { AppContextType } from "src/types/app-state.types";

const initialAppState: AppContextType = {
  formData: {
    name: "",
    dob: "",
    language: "",
    fundingSource: "",
  },
  onFormChange: () => {},
  setFormErrors: () => {},
  formErrors: null,
  clients: [],
  addClient: () => {},
  deleteClient: () => {},
  getClients: () => {},
  fieldHasError: (name: keyof FormErrors) => undefined,
};

const AppContext = createContext(initialAppState);

export const useAppContext = () => useContext<AppContextType>(AppContext);

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    language: "",
    fundingSource: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors | null>(null);
  const { makeRequest } = useApi();
  const [clients, setClients] = useState<Client[]>([]);

  const onFormChange = (name: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fieldHasError = (name: keyof FormErrors) => {
    if (formErrors) {
      return formErrors[name!];
    }
    return undefined;
  };

  const addClient = async (client: Client) => {
    try {
      const newClient = (await makeRequest(
        "clients",
        HttpMethod.POST,
        client
      )) as Client;
      setClients((prevClients) => [...prevClients, newClient]);
    } catch (error) {
      throw new Error(`Error creating client ${JSON.stringify(error)}`);
    }
  };

  const deleteClient = async (clientId: string) => {
    try {
      await makeRequest(`clients/${clientId}`, HttpMethod.DELETE);
      setClients((prevClients) =>
        prevClients.filter((client) => client.id !== clientId)
      );
    } catch (error) {
      throw new Error(`Error deleting client ${JSON.stringify(error)}`);
    }
  };

  const getClients = async () => {
    try {
      const clients = await makeRequest("clients");
      setClients(clients as Client[]);
    } catch (error) {
      throw new Error(`Error getting clients ${JSON.stringify(error)}`);
    }
  };
  return (
    <AppContext.Provider
      value={{
        formData,
        onFormChange,
        clients,
        addClient,
        deleteClient,
        formErrors,
        setFormErrors,
        fieldHasError,
        getClients,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
