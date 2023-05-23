import React from "react";
import { BrowserRouter,RouterProvider,createBrowserRouter,createRoutesFromElements, Routes, Route} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Vans from "./pages/Vans";
import Home from "./pages/Home";
import About from "./pages/About";

import NotFound from "./pages/NotFound";
import HostVans,{loader as hostVansLoader} from "./pages/Host/HostVans";
import HostVanDetail , {loader as hostVansDetailLoader} from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPrice from "./pages/Host/HostVanPrice";
import HostVanPhoto from "./pages/Host/HostVanPhoto";
import VanDetail from "./pages/VanDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Layout from "./components/Layout";
import { requireAuth } from "./utils";
import "./server";
import HostLayout from "./components/HostLayout";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
     
    />
    <Route
      path="vans"
      element={<Vans />}
      // errorElement={<Error />}
      // loader={vansLoader}
    />
    <Route 
      path="vans/:id" 
      element={<VanDetail />} 
      // loader={vanDetailLoader}
    />

    <Route path="host" element={<HostLayout />}>
      <Route
        index
        element={<Dashboard />}
        //loader={async ({ request }) => await requireAuth(request)}
      />
      <Route
        path="income"
        element={<Income />}
        loader={async ({ request }) => await requireAuth(request)}
      />
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async ({ request }) => await requireAuth(request)}
      />
      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader}
      />
      <Route
        path="vans/:id"
        element={<HostVanDetail />}
        // loader={hostVanDetailLoader}
      >
        <Route
          index
          element={<HostVanInfo />}
          loader={async ({ request }) => await requireAuth(request)}
        />
       <Route path="price" element={<HostVanPrice />} />
    <Route path="photo" element={<HostVanPhoto />} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

 
export default function App() {
  return (
<RouterProvider router={router} />
       
  
  );
}
