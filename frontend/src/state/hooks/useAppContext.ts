import { useContext } from "react";
import { AppContext } from "src/state/application/AppProvider"; 
import { AppContextType } from "src/types";

export const useAppContext = () => useContext<AppContextType>(AppContext);