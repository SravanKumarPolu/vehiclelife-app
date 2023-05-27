import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Vans from './pages/Vans/Vans';
import VansDetail from './pages/Vans/VansDetail';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVanDetail from './pages/Host/HostVanDetail'
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPrice from './pages/Host/HostVanPrice';
import HostVanPhoto from './pages/Host/HostVanPhoto';
import HostVans from './pages/Host/HostVans';


import './server.js'


//import reportWebVitals from './reportWebVitals';

function App(){
  return(
    <BrowserRouter>
 
    <Routes>
<Route element={<Layout />}>
<Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<Vans />} />
      <Route path="/vans/:id" element={<VansDetail />} />

      <Route path="/host" element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="/host/income" element={<Income />} />
      <Route path="/host/reviews" element={<Reviews />} />
      
      <Route path="/host/vans" element={<HostVans />} />
      <Route path="/host/vans/:id" element={<HostVanDetail />} >
       <Route index element={<HostVanInfo />} />
       <Route path="price" element={<HostVanPrice />} />
       <Route path="photo" element={<HostVanPhoto />} />
       </Route>

      </Route>
      <Route path='*' element={<NotFound />} />
</Route>
     
    </Routes>
  </BrowserRouter>
  )
}



 ReactDOM.createRoot(document.getElementById('root'))
 .render(<App />);


// reportWebVitals();
