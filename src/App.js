import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import { ThemeProvider } from "../src/services/ThemeContext"; // Import ThemeProvider

function App() {
  const isAuthenticated = localStorage.getItem("email") !== null;

  useEffect(() => {
    // Add any necessary authentication checks here
  }, [isAuthenticated]);

  return (
    <ThemeProvider>
      {" "}
      {/* Wrap your app with ThemeProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add more routes for other pages if needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
