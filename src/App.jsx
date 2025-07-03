import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import AppLayout from "./components/AppLayout";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change with multiple fallbacks
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // For Safari
  }, [location.pathname]);

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default App;
