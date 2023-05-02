 import React from "react";
 import { Link  } from "react-router-dom";
 export default function Home() {
    return (
    
      <div className="home-container" >
      <h1> You got the travel plan. We got the travel vans</h1>
      <p>
        Add  adventure to you life by  joining the #vanlife.make your perfect  road trip.
      </p>
      <Link to='vans'>Find your Van</Link>
      </div>
      
    
    );
  }
  