import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/components/auth/LoginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/dashboard/system" component={SystemPage} />
          <Route path="/dashboard/profile" component={ProfilePage} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
