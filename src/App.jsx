// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css"

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <div className="App">
        <header className="App-header">
          <Outlet />{" "}
        </header>{" "}
      </div>
    </>
  );
}

export default App;
