import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Vans from "./pages/Vans";
import Home from "./pages/Home";
import About from "./pages/About";
import VanDetail from "./pages/VanDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Layout from "./components/Layout";

import "./server";
import HostLayout from "./components/HostLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} /> 
          <Route path="/vans/:id" element={<VanDetail />} />
          
          <Route path="/host" element={<HostLayout />} >
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/reviews" element={<Reviews />} />
          <Route path="/host/income" element={<Income />} />
          </Route>
          
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
