// App.jsx
import { Outlet } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";

const App = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default App;
