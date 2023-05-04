import React from 'react';
import {Link}  from 'react-router-dom'



export default function HostVans(){
   const[vans,setVans]=React.useState([])
   React.useEffect(()=>{
       fetch("/api/host/vans")
       .then(res=>res.json())
       .then(data=>setVans(data.vans))
   },[])
   console.log("cool",vans)
   const HostVansEls=vans.map(van=>(
   <Link to={`/host/vans/${van.id}`} key={van.id}  className='host-van-link-wrapper'>
        <div className='host-van-single' key={van.id}>
           <img src={van.imageUrl}  />
           <div className='host-van-info' >
       <h3 >{van.name}</h3>
       <p>₹{van.price}/day</p>
    </div>

           </div>

     </Link>      
      
   ))
   return(
    <>
   <section className="host-van-list-container" >

        <h1 >Your listed vans</h1>
        <div className=" host-van-list " >
        {
            vans.length>0?(
                <section>{HostVansEls}  </section> 
            ):(
                <h2>Loading...</h2>
            )
  
               
            
        }
      
        </div>
    
   </section>
    </>
 
      
   )
}
