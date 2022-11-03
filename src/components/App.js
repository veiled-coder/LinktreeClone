import React from "react";
import "../styles/app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Contact";

import Homepage from "./Homepage";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
