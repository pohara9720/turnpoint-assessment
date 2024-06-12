import { createContext, useState, useContext } from "react";
import { Client } from "src/types";
import { AppContextType } from "src/types/app-state.types";

const initialAppState: AppContextType = {
  formData: {
    clientName: "",
    dateOfBirth: "",
    mainLanguage: "",
    secondaryLanguage: "",
    fundingSource: "",
  },
  onFormChange: () => {},
  clients: [],
  addClient: () => {},
  deleteClient: () => {},
};

const AppContext = createContext(initialAppState);

export const useAppContext = () => useContext<AppContextType>(AppContext);

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [formData, setFormData] = useState({
    clientName: "",
    dateOfBirth: "",
    mainLanguage: "",
    secondaryLanguage: "",
    fundingSource: "",
  });

  const [clients, setClients] = useState<Client[]>([]);

  const onFormChange = (name: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addClient = (client: Client) => {
    setClients((prevClients) => [...prevClients, client]);
  };

  const deleteClient = (clientId: string) => {
    setClients((prevClients) =>
      prevClients.filter((client) => client.id !== clientId)
    );
  };

  return (
    <AppContext.Provider
      value={{ formData, onFormChange, clients, addClient, deleteClient }}
    >
      {children}
    </AppContext.Provider>
  );
};
