import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inscription from "./pages/Inscription";
import Login from "./pages/Login";
import "./App.css";
import Home from "./pages/Home";
import AuthProvider from "./contexts/AuthContexts";
import ProtectedRoute from "./hooks/ProtectedRoute";
import FirstPage from "./pages/FirstPage";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/connexion" element={<Login />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
