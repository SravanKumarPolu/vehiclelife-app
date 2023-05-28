import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter,Routes,RouterProvider,Route, createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Vans  ,{Loader as vansLoader}from './pages/Vans/Vans';
import VansDetail,{loader as vanDetailLoader} from './pages/Vans/VansDetail';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout'; 
import Error from './components/Error';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVanDetail from './pages/Host/HostVanDetail'
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPrice from './pages/Host/HostVanPrice';
import HostVanPhoto from './pages/Host/HostVanPhoto';
import HostVans ,{loader as hostVansLoader}from './pages/Host/HostVans';
import Login from './pages/Login';
import { requireAuth } from './utils';

import './server.js'


//import reportWebVitals from './reportWebVitals';
const router=createBrowserRouter(createRoutesFromElements(
<Route element={<Layout />}>
<Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans"  element={<Vans />}
       loader={vansLoader}  errorElement={<Error />}/>
       <Route path="login" element={<Login />} />
      <Route path="/vans/:id" element={<VansDetail />}
       loader={vanDetailLoader} />

      <Route path="/host" element={<HostLayout />}>
      <Route index element={<Dashboard />}  loader={async ()=>{
          await requireAuth()
          return null;
        }} />
      <Route path="/host/income" element={<Income />}
        loader={async ()=>{
          await requireAuth()
          return null;
        }}
         />
      <Route path="/host/reviews" element={<Reviews />} 
       loader={async ()=>{
          await requireAuth()
          return null;
        }}
      />
      
      <Route path="/host/vans" element={<HostVans />}  loader={hostVansLoader}/>
      <Route path="/host/vans/:id" element={<HostVanDetail />} >
       <Route index element={<HostVanInfo />}  loader={async ()=>{
          await requireAuth()
          return null;
        }} />
       <Route path="price" element={<HostVanPrice />}  loader={async ()=>{
          await requireAuth()
          return null;
        }} />
       <Route path="photo" element={<HostVanPhoto />}  loader={async ()=>{
          await requireAuth()
          return null;
        }} />
       </Route>

      </Route>
      <Route path='*' element={<NotFound />} />
</Route>
))
function App(){
  return(
 <RouterProvider router={router} />
  )
}



 ReactDOM.createRoot(document.getElementById('root'))
 .render(<App />);


// reportWebVitals();
