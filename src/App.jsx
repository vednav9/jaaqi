import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CreatorPage from "./components/CreatorPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creator/:id" element={<CreatorPage />} />
        <Route path="*" element={<h2 style={{ padding: 20 }}>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}
