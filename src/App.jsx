import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

import Vans from "./pages/Vans";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import HostVans from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPrice from "./pages/Host/HostVanPrice";
import HostVanPhoto from "./pages/Host/HostVanPhoto";
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
        <Route path="/" element={<Layout />}>
        
          <Route index  element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} /> 
          <Route path="vans/:id" element={<VanDetail />} />
          
          <Route path="host" element={<HostLayout />} >
          <Route index element={<Dashboard />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="income" element={<Income />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVanDetail />} >
              <Route  index  element={<HostVanInfo />} />
              <Route  path="price" element={<HostVanPrice />}/>
              <Route path="photo" element={<HostVanPhoto />}/>
          </Route>

          </Route>
          
          </Route>
          <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}
