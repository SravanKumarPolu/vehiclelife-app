import React from 'react';
import { Link,Outlet} from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components//Footer";

export default function NotFound(){
    return(
        <>
        <div className="not-found-wrapper">
        {/* <Header /> */}
        
        <main>
          <Outlet />
       <div className='not-found-class'>
       <h1 class="not-found">Sorry , the page you were looking for was not found</h1>
        <Link to="/">Return to Home</Link>
       </div>
        </main>
       
        {/* <Footer /> */}
      </div>
     
            
        </>
    )
}
