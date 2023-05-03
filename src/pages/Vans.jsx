import React from "react";

import {Link}  from 'react-router-dom'


export default function Vans(){
    const [vans,setVans]=React.useState([])
    React.useEffect(() => {
       fetch("/api/vans")
   .then(res=>res.json() )
   .then(data=>setVans(data.vans))
    }, [])
    console.log(vans)
    
    const vanElements=vans.map(van=>(
        
     <div key={van.id} className="van-title" >
     <Link to={`/vans/${van.id}`}> 
     <img src={van.imageUrl} />
     <div className="van-info"  >
        <h3 >{van.name}</h3>
        <p>{van.price} <span>/day</span></p>
     </div>
        <p  className={`van-type${van.type} selected`} >{van.type}</p> 
        </Link>
     </div> 

    ))
    return(
        <div className="van-list-container">
        <h1>Explore our van Options</h1>
        <div className=" van-list " style={{color:'red'}}>
        {vanElements}
        </div>
        </div>
        
        
    )
} 