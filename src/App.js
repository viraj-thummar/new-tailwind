import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Insight from "./components/insight";
import Admin from "./components/admin";
import AdminLogin from "./components/admin/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/insight" element={<Insight />} />

        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        {localStorage.getItem("gsv-token") ? (
          <Route path="/admin" element={<Admin />} />
        ) : (
          <Route path="/admin" element={<Navigate to="/admin/login" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
