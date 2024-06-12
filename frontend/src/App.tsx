import { Routes, Route } from "react-router-dom";
import { ClientListPage, NotFoundPage, NewClientPage } from "./pages";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<ClientListPage />} />
      <Route path="/new-client" element={<NewClientPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
