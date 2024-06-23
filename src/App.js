import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import CustomNavbar from "./Components/Navbar/CustomNavbar";

import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import ApplyCompletedFormat from "./Components/Pages/ApplyCompletedFormat";

export default function App() {

  return (
    <div className="App">
      <Router basename="/task-manager-app">
        <CustomNavbar />
        <Routes>
          <Route
            path = "/"
            element={
              <>
                <Home />
                <ApplyCompletedFormat />
              </>
            }
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </Router>
    </div>
  );
}